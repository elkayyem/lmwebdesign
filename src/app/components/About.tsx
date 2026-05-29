import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;
const BODY = { fontFamily: "'DM Sans', sans-serif" } as const;

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
  { value: "5★", label: "Average Rating" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="bg-background px-8 md:px-12 py-24 md:py-36 overflow-hidden" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <motion.div
            className="flex items-center gap-5 mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
              className="text-muted-foreground"
            >
              Studio
            </span>
            <div className="w-10 h-px bg-border" />
          </motion.div>

          <motion.h2
            style={{
              ...DISPLAY,
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.93,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
            className="text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Digital craft
            <br />
            with purpose
            <br />
            <span style={{ color: "#C9FF00" }}>& precision.</span>
          </motion.h2>

          <motion.p
            style={{ ...BODY, fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "460px" }}
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            LM Web Creators is a boutique digital studio helping businesses establish a powerful online presence. We work closely with each client — no assembly lines, no outsourcing — just dedicated craft and honest results.
          </motion.p>

          <motion.p
            style={{ ...BODY, fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "460px" }}
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Whether you're launching your first website or evolving an established brand, we bring the same level of care and commitment to every project.
          </motion.p>
        </div>

        {/* Right: image + stats */}
        <div>
          <motion.div
            className="relative mb-8 overflow-hidden"
            style={{ aspectRatio: "4/3", backgroundColor: "#1a1a1a" }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765539160785-e7953620488f?w=900&h=700&fit=crop&auto=format"
              alt="Creative studio workspace with neon lighting"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-[#080808] opacity-20" />
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-0 border-t border-l border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-b border-border py-7 px-6"
              >
                <span
                  style={{ ...DISPLAY, fontWeight: 900, fontSize: "2.5rem", lineHeight: 1, letterSpacing: "-0.02em", color: "#C9FF00" }}
                  className="block mb-1"
                >
                  {stat.value}
                </span>
                <span
                  style={{ ...BODY, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  className="text-muted-foreground"
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
