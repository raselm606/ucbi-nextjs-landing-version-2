import { NextResponse } from "next/server";

const NETWORK = "eth";
const POOL = "0x5c11e9a6c2640200c765cef57dcf4159fc4c54cb";
const BASE = "https://api.geckoterminal.com/api/v2";

export async function GET() {
  try {
    const url = `${BASE}/networks/${NETWORK}/pools/${POOL}/ohlcv/hour?aggregate=1&limit=24&currency=usd`;
    const response = await fetch(url, {
      headers: { accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      return NextResponse.json({ error: "Historical UCBI prices are unavailable" }, { status: 502 });
    }

    const data = await response.json();
    const candles = data?.data?.attributes?.ohlcv_list || [];
    const prices = candles
      .filter((candle) => Number.isFinite(Number(candle[0])) && Number.isFinite(Number(candle[4])))
      .map((candle) => [Number(candle[0]) * 1000, Number(candle[4])])
      .reverse();

    return NextResponse.json({ asset: "ucbi", prices }, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30" },
    });
  } catch {
    return NextResponse.json({ error: "Unable to fetch historical UCBI prices" }, { status: 502 });
  }
}
