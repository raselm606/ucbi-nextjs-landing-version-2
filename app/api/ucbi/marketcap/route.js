import { NextResponse } from "next/server";
import { createPublicClient, http, formatUnits } from "viem";
import { mainnet } from "viem/chains";

export const runtime = "nodejs";

const TOKEN = "0x2adba23cf1252de095aced801e758b369ec10426";
const POOL  = "0x5c11e9a6c2640200c765cef57dcf4159fc4c54cb"; // your real pool
const NETWORK = "eth";
const GT_BASE = "https://api.geckoterminal.com/api/v2";

const ERC20_ABI = [
  { name: "decimals", type: "function", stateMutability: "view", inputs: [], outputs: [{ type: "uint8" }] },
  { name: "totalSupply", type: "function", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
];

async function fetchJson(url) {
  const res = await fetch(url, { headers: { accept: "application/json" }, cache: "no-store" });
  const text = await res.text();
  if (!res.ok) throw new Error(`${res.status} ${text.slice(0, 300)}`);
  return JSON.parse(text);
}

export async function GET() {
  try {
    // 1) On-chain supply
    const client = createPublicClient({ chain: mainnet, transport: http() });
    const [decimals, totalSupplyRaw] = await Promise.all([
      client.readContract({ address: TOKEN, abi: ERC20_ABI, functionName: "decimals" }),
      client.readContract({ address: TOKEN, abi: ERC20_ABI, functionName: "totalSupply" }),
    ]);
    const totalSupply = Number(formatUnits(totalSupplyRaw, Number(decimals)));

    // 2) OHLCV from GeckoTerminal by POOL
    // Endpoint: /networks/{network}/pools/{pool_address}/ohlcv/{timeframe}  :contentReference[oaicite:1]{index=1}
    const timeframe = "day";
    const aggregate = 1;
    const limit = 90;

    const ohlcvUrl =
      `${GT_BASE}/networks/${NETWORK}/pools/${POOL}/ohlcv/${timeframe}` +
      `?aggregate=${aggregate}&limit=${limit}&currency=usd`;

    const ohlcv = await fetchJson(ohlcvUrl);
    const candles = ohlcv?.data?.attributes?.ohlcv_list || [];

    const series = candles
      .map((c) => {
        // usually: [timestamp, open, high, low, close, volume]
        const tsSeconds = c[0];
        const closeUsd = Number(c[4]);

        const date = new Date(tsSeconds * 1000).toISOString().slice(0, 10);
        return { date, closeUsd, marketCap: closeUsd * totalSupply };
      })
      .reverse();

    return NextResponse.json({ pool: POOL, totalSupply, series });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to build marketcap series", details: String(e) },
      { status: 500 }
    );
  }
}
