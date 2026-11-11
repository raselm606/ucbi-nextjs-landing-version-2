import { cmcGet } from "@/app/api/_lib/cmc";

const UCBI_BSC_CONTRACT = "0xc888dca9448d04f045df801f5369348cdf67fb18";

export async function GET() {
  // Query the DEX token endpoint by the supplied BNB Smart Chain contract.
  return cmcGet("/v1/dex/token/price", {
    platform: "bsc",
    address: UCBI_BSC_CONTRACT,
  });
}
