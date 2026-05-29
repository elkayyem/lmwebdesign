import { motion } from "motion/react";

const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;
const BODY = { fontFamily: "'DM Sans', sans-serif" } as const;

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-background flex flex-col justify-between px-6 md:px-12 pb-12 pt-28 overflow-hidden"
      id="hero"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,237,231,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,231,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top status bar */}
      <div className="relative flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#C9FF00", boxShadow: "0 0 8px #C9FF00" }}
          />
          <span
            style={{ ...BODY, fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
            className="text-muted-foreground"
          >
            Available for Projects
          </span>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ ...BODY, fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
          className="text-muted-foreground"
        >
          LM Web Creators — Est. 2024
        </motion.span>
      </div>

      {/* Main headline */}
      <div className="relative flex-1 flex items-center py-8">
        <div>
          {[
            { text: "WE BUILD", lime: false },
            { text: "WEBSITES", lime: false },
            { text: "THAT MOVE.", lime: true },
          ].map((line, i) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                style={{
                  ...DISPLAY,
                  fontSize: "clamp(2.5rem, 15vw, 19rem)",
                  fontWeight: 900,
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: line.lime ? "#C9FF00" : "var(--foreground)",
                }}
              >
                {line.text}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom info row */}
      <motion.div
        className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1 }}
      >
        <div style={{ maxWidth: "360px" }}>
          <p
            style={{ ...BODY, fontSize: "1.0625rem", lineHeight: 1.7 }}
            className="text-muted-foreground"
          >
            Digital experiences for brands that refuse to be ordinary. Web design, hosting, brand identity & social media — everything your online presence needs.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#services"
              className="bg-[#C9FF00] text-[#080808] px-7 py-3 hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
              style={{ ...BODY, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Our Services
            </a>
            <a
              href="#work"
              className="border border-border px-7 py-3 text-foreground hover:border-foreground transition-all duration-300 inline-block"
              style={{ ...BODY, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              View Work
            </a>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 self-end">
          <span
            style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", writingMode: "vertical-rl" }}
            className="text-muted-foreground"
          >
            Scroll to explore
          </span>
          <div className="w-px h-20 bg-muted-foreground opacity-30" />
        </div>
      </motion.div>
    </section>
  );
}
