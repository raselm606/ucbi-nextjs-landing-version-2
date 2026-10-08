import { NextResponse } from 'next/server';

const BINANCE_API = 'https://api.binance.com/api/v3';
const RANGE_CONFIG = {
  '1H': { interval: '1m', limit: 60 },
  '24H': { interval: '15m', limit: 96 },
  '7D': { interval: '4h', limit: 42 },
  '30D': { interval: '1d', limit: 30 },
  '90D': { interval: '1d', limit: 90 },
  '1Y': { interval: '1d', limit: 365 },
};

async function getJson(url) {
  const response = await fetch(url, { next: { revalidate: 30 } });
  if (!response.ok) throw new Error(`Market provider returned ${response.status}`);
  return response.json();
}

export async function GET(request) {
  const range = new URL(request.url).searchParams.get('range') || '24H';
  const config = RANGE_CONFIG[range];
  if (!config) {
    return NextResponse.json({ error: 'Unsupported chart range' }, { status: 400 });
  }

  try {
    const [ticker, candles, book, ethBtc] = await Promise.all([
      getJson(`${BINANCE_API}/ticker/24hr?symbol=ETHUSDT`),
      getJson(`${BINANCE_API}/klines?symbol=ETHUSDT&interval=${config.interval}&limit=${config.limit}`),
      getJson(`${BINANCE_API}/ticker/bookTicker?symbol=ETHUSDT`),
      getJson(`${BINANCE_API}/ticker/price?symbol=ETHBTC`),
    ]);

    return NextResponse.json({
      source: 'Binance',
      pair: 'ETH/USDT',
      range,
      updatedAt: new Date().toISOString(),
      ticker: {
        price: Number(ticker.lastPrice),
        change: Number(ticker.priceChange),
        changePercent: Number(ticker.priceChangePercent),
        high: Number(ticker.highPrice),
        low: Number(ticker.lowPrice),
        volumeEth: Number(ticker.volume),
        volumeUsd: Number(ticker.quoteVolume),
        trades: Number(ticker.count),
        bid: Number(book.bidPrice),
        ask: Number(book.askPrice),
        ethBtc: Number(ethBtc.price),
      },
      candles: candles.map(([time, open, high, low, close, volume]) => ({
        time,
        open: Number(open),
        high: Number(high),
        low: Number(low),
        close: Number(close),
        volume: Number(volume),
      })),
    }, { headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60' } });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Ethereum market data is unavailable' }, { status: 502 });
  }
}
