const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;

const items = [
  "Web Design",
  "Development",
  "Hosting",
  "Domain Management",
  "Brand Identity",
  "Logo Design",
  "Social Media",
  "Ongoing Support",
  "Maintenance",
  "Consultation",
];

export function MarqueeStrip() {
  return (
    <div className="border-y border-border overflow-hidden py-4" style={{ backgroundColor: "#C9FF00" }}>
      <div
        style={{
          display: "flex",
          animation: "lm-marquee 28s linear infinite",
          willChange: "transform",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              ...DISPLAY,
              fontWeight: 700,
              fontSize: "1.0625rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#080808",
              whiteSpace: "nowrap",
              paddingRight: "3.5rem",
              display: "flex",
              alignItems: "center",
              gap: "3.5rem",
            }}
          >
            {item}
            <span style={{ opacity: 0.35, paddingRight: 0 }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes lm-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
