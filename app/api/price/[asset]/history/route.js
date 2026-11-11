import { NextResponse } from "next/server";

const COIN_IDS = {
  btc: "bitcoin",
  eth: "ethereum",
  atom: "cosmos",
  xrp: "ripple",
  hype: "hyperliquid",
  dogecoin: "dogecoin",
  worldcoin: "worldcoin-wld",
};

export async function GET(_request, { params }) {
  const { asset } = await params;
  const coinId = COIN_IDS[asset];
  if (!coinId) return NextResponse.json({ error: "Unsupported asset" }, { status: 404 });

  try {
    const url = new URL(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`);
    url.searchParams.set("vs_currency", "usd");
    url.searchParams.set("days", "1");

    const response = await fetch(url, {
      headers: { accept: "application/json" },
      next: { revalidate: 120 },
    });
    if (!response.ok) {
      return NextResponse.json({ error: "Historical price data is unavailable" }, { status: 502 });
    }

    const data = await response.json();
    const prices = Array.isArray(data.prices)
      ? data.prices.filter((point) => Array.isArray(point) && Number.isFinite(point[0]) && Number.isFinite(point[1]))
      : [];
    return NextResponse.json({ asset, prices }, { headers: { "Cache-Control": "public, s-maxage=120, stale-while-revalidate=60" } });
  } catch {
    return NextResponse.json({ error: "Unable to fetch historical price data" }, { status: 502 });
  }
}
