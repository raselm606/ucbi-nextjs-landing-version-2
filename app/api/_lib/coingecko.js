// app/api/_lib/coingecko.js
import { NextResponse } from "next/server";

export async function simplePrice(coinId, vs = "usd") {
  if (!coinId) {
    return NextResponse.json(
      { ok: false, error: "coinId is required" },
      { status: 400 }
    );
  }

  const id = String(coinId).toLowerCase();
  const currency = String(vs).toLowerCase();

  const url =
    `https://api.coingecko.com/api/v3/simple/price` +
    `?ids=${encodeURIComponent(id)}` +
    `&vs_currencies=${encodeURIComponent(currency)}` +
    `&include_last_updated_at=true`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 30 }, // 2 minutes cache
      headers: {
        accept: "application/json",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `CoinGecko error: ${res.status}`,
        },
        { status: 502 }
      );
    }

    const data = await res.json();

    const price = data?.[id]?.[currency];
    const last_updated_at = data?.[id]?.last_updated_at ?? null;

    if (typeof price !== "number") {
      return NextResponse.json(
        {
          ok: false,
          error: "Price not found",
          coinId: id,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        coinId: id,
        vs: currency,
        price,
        last_updated_at,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=120, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to fetch CoinGecko price",
      },
      { status: 500 }
    );
  }
}