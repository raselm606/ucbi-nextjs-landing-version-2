import { NextResponse } from 'next/server';

const KRAKEN_API = 'https://api.kraken.com/0/public';
const RANGE_CONFIG = {
  '1H': { interval: 1, seconds: 60 * 60 },
  '24H': { interval: 5, seconds: 24 * 60 * 60 },
  '7D': { interval: 15, seconds: 7 * 24 * 60 * 60 },
  '30D': { interval: 60, seconds: 30 * 24 * 60 * 60 },
  '90D': { interval: 240, seconds: 90 * 24 * 60 * 60 },
  '1Y': { interval: 1440, seconds: 365 * 24 * 60 * 60 },
};

async function getJson(url) {
  const response = await fetch(url, { next: { revalidate: 15 } });
  if (!response.ok) throw new Error(`Kraken returned ${response.status}`);
  const payload = await response.json();
  if (payload.error?.length) throw new Error(payload.error.join(', '));
  return payload.result;
}

const pairResult = (result) => Object.entries(result).find(([key]) => key !== 'last')?.[1];

export async function GET(request) {
  const range = new URL(request.url).searchParams.get('range') || '24H';
  const config = RANGE_CONFIG[range];
  if (!config) return NextResponse.json({ error: 'Unsupported chart range' }, { status: 400 });

  try {
    const since = Math.floor(Date.now() / 1000) - config.seconds;
    const [tickerResult, candleResult, ethXbtResult] = await Promise.all([
      getJson(`${KRAKEN_API}/Ticker?pair=ETHUSD`),
      getJson(`${KRAKEN_API}/OHLC?pair=ETHUSD&interval=${config.interval}&since=${since}`),
      getJson(`${KRAKEN_API}/Ticker?pair=ETHXBT`),
    ]);
    const ticker = pairResult(tickerResult);
    const candles = pairResult(candleResult);
    const ethXbt = pairResult(ethXbtResult);
    if (!ticker || !candles?.length || !ethXbt) throw new Error('Kraken did not return complete ETH market data');

    const recentCandles = candles.map(([time, open, high, low, close, _vwap, volume, trades]) => ({
      time: Number(time) * 1000,
      open: Number(open),
      high: Number(high),
      low: Number(low),
      close: Number(close),
      volume: Number(volume),
      trades: Number(trades),
    }));
    const price = Number(ticker.c[0]);
    const dayOpen = Number(ticker.o);

    return NextResponse.json({
      source: 'Kraken',
      pair: 'ETH/USD',
      range,
      updatedAt: new Date().toISOString(),
      ticker: {
        price,
        change: price - dayOpen,
        changePercent: dayOpen ? ((price - dayOpen) / dayOpen) * 100 : 0,
        high: Number(ticker.h[1]),
        low: Number(ticker.l[1]),
        volumeEth: Number(ticker.v[1]),
        volumeUsd: Number(ticker.v[1]) * Number(ticker.p[1]),
        trades: Number(ticker.t[1]),
        bid: Number(ticker.b[0]),
        ask: Number(ticker.a[0]),
        ethBtc: Number(ethXbt.c[0]),
      },
      candles: recentCandles,
    }, { headers: { 'Cache-Control': 'public, s-maxage=15, stale-while-revalidate=30' } });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Kraken Ethereum market data is unavailable' }, { status: 502 });
  }
}
