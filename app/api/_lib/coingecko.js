// app/api/_lib/coingecko.js
import { NextResponse } from "next/server";

export async function simplePrice(coinId, vs = "usd") {
  const url =
    `https://api.coingecko.com/api/v3/simple/price` +
    `?ids=${encodeURIComponent(coinId)}` +
    `&vs_currencies=${encodeURIComponent(vs)}` +
    `&include_last_updated_at=true`;

  const res = await fetch(url, {
    // server-side cache (reduce rate limit issue)
    next: { revalidate: 30 },
    headers: { accept: "application/json" },
  });

  if (!res.ok) {
    return NextResponse.json(
      { ok: false, error: `CoinGecko error: ${res.status}` },
      { status: 502 }
    );
  }

  const data = await res.json();
  const price = data?.[coinId]?.[vs];
  const last_updated_at = data?.[coinId]?.last_updated_at ?? null;

  if (typeof price !== "number") {
    return NextResponse.json(
      { ok: false, error: "Price not found", coinId },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ok: true,
    coinId,
    vs,
    price,
    last_updated_at,
  });
}
