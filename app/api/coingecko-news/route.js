import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/news?per_page=20&language=en&type=news",
      {
        headers: {
          "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
          accept: "application/json",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    console.log("CoinGecko Response:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("CoinGecko Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch CoinGecko news",
      },
      { status: 500 }
    );
  }
}