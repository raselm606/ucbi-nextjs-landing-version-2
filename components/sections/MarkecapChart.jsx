"use client";

import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function MarkecapChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/ucbi/marketcap");
      const json = await res.json();
      setData(json.series || []);
    })();
  }, []);

  if (!data.length) return <div>Loading…</div>;

  return (
    <div style={{ width: "100%", height: 100 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            {/* gradient fill */}
            <linearGradient id="mc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis
            tickFormatter={(v) =>
              Intl.NumberFormat("en", { notation: "compact" }).format(v)
            }
          />

          <Tooltip
            formatter={(v) =>
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(v)
            }
          />

          <Area
            type="monotone"
            dataKey="marketCap"
            stroke="#3b82f6"
            fill="url(#mc)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
