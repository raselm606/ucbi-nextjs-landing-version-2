import { cmcGet } from "@/app/api/_lib/cmc";

export async function GET() {
  const symbol = process.env.UCBI_SYMBOL || "UCBI";

  // /v1/cryptocurrency/quotes/latest returns price/market cap/volume etc.
  return cmcGet("/v1/cryptocurrency/quotes/latest", {
    symbol,
    convert: "USD",
  });
}
