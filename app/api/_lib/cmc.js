// app/api/_lib/cmc.js
import { NextResponse } from "next/server";

const BASE = "https://pro-api.coinmarketcap.com";

export async function cmcGet(path, params = {}) {
  const apiKey = process.env.CMC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "CMC_API_KEY missing" }, { status: 500 });
  }

  const qs = new URLSearchParams(params).toString();
  const url = `${BASE}${path}${qs ? `?${qs}` : ""}`;

  const res = await fetch(url, {
    headers: {
      "X-CMC_PRO_API_KEY": apiKey,
      Accept: "application/json",
    },
    // caching (rate-limit friendly)
    next: { revalidate: 30 },
  });

  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = null; }

  if (!res.ok || !data) {
    return NextResponse.json(
      { ok: false, error: "CMC fetch failed", status: res.status, raw: text?.slice?.(0, 200) },
      { status: 502 }
    );
  }

  // CMC response conventionally has status object
  if (data?.status?.error_code && data.status.error_code !== 0) {
    return NextResponse.json(
      { ok: false, error: data.status.error_message || "CMC API error", cmc_status: data.status },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, data });
}
