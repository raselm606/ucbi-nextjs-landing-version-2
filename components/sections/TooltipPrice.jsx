"use client";

const TooltipPrice = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  const p = payload[0].payload; // hovered point
  const showChange = p?.isLive && typeof p?.change24h === "number";

  const isPos = showChange && p.change24h >= 0;
  const changeText = showChange
    ? `${isPos ? "+" : ""}${p.change24h.toFixed(2)}% (24h)`
    : null;

  return (
    <div style={{
      background: "#0b1f36",
      border: "1px solid rgba(255,255,255,0.12)",
      padding: "8px 12px",
      borderRadius: 10,
      color: "#fff",
      fontSize: 12,
      lineHeight: 1.35
    }}>
      {/* ✅ label/number দেখাব না */}
      <div style={{ fontWeight: 700 }}>
        Price: {typeof p?.price === "number" ? `$${p.price.toFixed(4)}` : "--"}
      </div>

      {showChange && (
        <div style={{
          marginTop: 4,
          fontWeight: 700,
          color: isPos ? "#16c784" : "#EA3943"
        }}>
          {changeText}
        </div>
      )}
    </div>
  );
};

export default TooltipPrice;
