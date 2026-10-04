const API_BASE = "https://api.cryptoetf.today/api";
const DATA_WINDOW = 30;

export async function GET() {
  const apiKey = process.env.CRYPTO_ETF_API;
  const headers = { Accept: "application/json" };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

  try {
    const [issuerFlowsResponse, pricesResponse] = await Promise.all([
      // This is the same first-party endpoint used by the CryptoETF Ethereum flow dashboard.
      fetch(`${API_BASE}/etf-flow/eth`, {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
      }),
      apiKey
        ? fetch(`${API_BASE}/v1/prices`, {
            headers,
            next: { revalidate: 300 },
          })
        : Promise.resolve(null),
    ]);

    let issuerFlows = [];
    let fallbackFlows = [];

    if (issuerFlowsResponse.ok) {
      const rows = await issuerFlowsResponse.json();
      issuerFlows = rows
        .filter((row) => row.date)
        .slice(0, DATA_WINDOW)
        .reverse();
    } else if (apiKey) {
      const fallbackResponse = await fetch(`${API_BASE}/v1/flows/eth`, {
        headers,
        next: { revalidate: 300 },
      });
      if (fallbackResponse.ok) {
        const fallback = await fallbackResponse.json();
        fallbackFlows = fallback.days ?? [];
      }
    }

    if (!issuerFlows.length && !fallbackFlows.length) {
      const status = issuerFlowsResponse.status;
      return Response.json(
        { error: status === 401 ? "CryptoETF rejected the API key." : "CryptoETF flow data is temporarily unavailable." },
        { status: status === 401 ? 401 : status === 429 ? 429 : 502 },
      );
    }

    let livePrice = null;
    if (pricesResponse?.ok) {
      const priceData = await pricesResponse.json();
      const ethPrice = priceData.prices?.find((item) => item.symbol === "ETH");
      if (ethPrice) {
        livePrice = {
          priceUsd: ethPrice.priceUsd,
          change24hPct: ethPrice.change24hPct,
          updatedAt: priceData.updatedAt,
        };
      }
    }

    const latestDailyPrice = issuerFlows.at(-1)?.ethPrice;
    const price = livePrice ?? (latestDailyPrice
      ? { priceUsd: latestDailyPrice, change24hPct: null, updatedAt: null }
      : null);

    const flows = issuerFlows.length
      ? issuerFlows.map((row) => ({
          date: row.date,
          netFlowUsdM: Number(row.total ?? 0),
          priceUsd: row.ethPrice == null ? null : Number(row.ethPrice),
        }))
      : fallbackFlows.map((row) => ({
          date: row.date,
          netFlowUsdM: Number(row.netFlowUsdM ?? 0),
          priceUsd: null,
        }));

    return Response.json({
      symbol: "ETH",
      windowDays: DATA_WINDOW,
      issuerFlows,
      hasIssuerBreakdown: issuerFlows.length > 0,
      flows,
      updatedAt: issuerFlows.at(-1)?.date ?? flows.at(-1)?.date ?? null,
      price,
    });
  } catch {
    return Response.json(
      { error: "Unable to reach CryptoETF right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
