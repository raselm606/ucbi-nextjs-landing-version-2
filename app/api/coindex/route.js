import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  const key = process.env.COINDESK_API_KEY;

  if (!key) {
    return NextResponse.json(
      { error: "Missing COINDESK_API_KEY" },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    lang: "EN",
    limit: "7",
    source_ids: "coindesk",
    categories:
      "BLOCKCHAIN,BUSINESS,COMMODITY,DIGITALASSETTREASURY,EXCHANGE",
    api_key: key,
  });

  const url = `https://data-api.coindesk.com/news/v1/article/list?${params.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");

      return NextResponse.json(
        {
          error: "CoinDesk API error",
          status: res.status,
          details: text.slice(0, 500),
        },
        { status: 502 }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch CoinDesk API",
        details:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}