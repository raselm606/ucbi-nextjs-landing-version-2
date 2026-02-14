import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  const key = process.env.COINDESK_API_KEY;

  if (!key) {
    return NextResponse.json({ error: "Missing COINDESK_API_KEY" }, { status: 500 });
  }

  const url =
    "https://data-api.coindesk.com/news/v1/article/list" +
    `?lang=EN&limit=10&categories=ETH,DIGITAL%20ASSET%20TREASURY,ETHFI,BTC&api_key=${encodeURIComponent(key)}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return NextResponse.json(
      { error: "Coindesk API error", status: res.status, details: text.slice(0, 500) },
      { status: 502 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
