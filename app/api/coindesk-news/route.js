import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: [
      ["media:content", "mediaContent", { keepArray: true }],
      ["dc:creator", "creator"],
    ],
  },
});

const RSS_URL =
  "https://www.coindesk.com/arc/outboundfeeds/rss/";

export const revalidate = 86400;

export async function GET() {
  try {
    const response = await fetch(RSS_URL, {
      next: {
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      throw new Error(`RSS request failed: ${response.status}`);
    }

    const xml = await response.text();

    const feed = await parser.parseString(xml);

    const articles = feed.items
      .map((item) => {
        const media = item.mediaContent?.[0];

        return {
          guid: item.guid || null,
          title: item.title || "",
          url: item.link || "",
          description:
            item.contentSnippet ||
            item.description ||
            "",
          image: media?.$?.url || null,
          published_at: item.pubDate || null,
          author:
            item.creator ||
            item.author ||
            "CoinDesk",
          source: "CoinDesk",
        };
      })
      .filter((article) => article.title && article.url)
      .slice(0, 20);

    return NextResponse.json({
      success: true,
      count: articles.length,
      articles,
    });
  } catch (error) {
    console.error("CoinDesk RSS Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch CoinDesk RSS",
      },
      { status: 500 }
    );
  }
}