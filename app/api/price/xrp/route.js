import { simplePrice } from "@/app/api/_lib/coingecko";

export async function GET() {
  return simplePrice("ripple", "usd");
}
