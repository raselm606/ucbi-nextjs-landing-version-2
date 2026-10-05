const API_BASE = "https://api.coingecko.com/api/v3";
const REQUEST_HEADERS = {
  Accept: "application/json",
  ...(process.env.COINGECKO_API_KEY
    ? { "x-cg-demo-api-key": process.env.COINGECKO_API_KEY }
    : {}),
};

export async function GET() {
  try {
    const [response, btcPriceResponse] = await Promise.all([
      fetch(`${API_BASE}/exchanges?per_page=20&page=1`, {
        headers: REQUEST_HEADERS,
        next: { revalidate: 120 },
      }),
      fetch(`${API_BASE}/simple/price?ids=bitcoin&vs_currencies=usd`, {
        headers: REQUEST_HEADERS,
        next: { revalidate: 120 },
      }),
    ]);

    if (!response.ok) {
      return Response.json(
        { error: `Exchange market data is temporarily unavailable (${response.status}).` },
        { status: 502 },
      );
    }

    const exchanges = await response.json();
    if (!Array.isArray(exchanges)) {
      return Response.json({ error: "Exchange data was returned in an unexpected format." }, { status: 502 });
    }

    const rankedExchanges = exchanges.slice(0, 10);
    const requestedExchanges = ["binance", "coinbase_exchange", "kraken"];
    for (const id of requestedExchanges) {
      const exchange = exchanges.find((item) => item.id === id);
      if (exchange && !rankedExchanges.some((item) => item.id === id)) rankedExchanges.push(exchange);
    }

    const btcPriceData = btcPriceResponse.ok ? await btcPriceResponse.json() : null;
    const btcPriceUsd = Number(btcPriceData?.bitcoin?.usd) || null;
    const data = rankedExchanges
      .sort((a, b) => (a.trust_score_rank ?? Number.MAX_SAFE_INTEGER) - (b.trust_score_rank ?? Number.MAX_SAFE_INTEGER))
      .map((exchange) => ({
        id: exchange.id,
        name: exchange.name,
        image: exchange.image,
        url: exchange.url,
        country: exchange.country,
        yearEstablished: exchange.year_established,
        trustScore: exchange.trust_score,
        rank: exchange.trust_score_rank,
        volumeBtc: Number(exchange.trade_volume_24h_btc ?? 0),
        volumeUsd: btcPriceUsd ? Number(exchange.trade_volume_24h_btc ?? 0) * btcPriceUsd : null,
      }));

    return Response.json(
      { exchanges: data, btcPriceUsd, updatedAt: new Date().toISOString(), source: "CoinGecko" },
      { headers: { "Cache-Control": "public, s-maxage=120, stale-while-revalidate=60" } },
    );
  } catch {
    return Response.json({ error: "Unable to reach the exchange data provider." }, { status: 502 });
  }
}
