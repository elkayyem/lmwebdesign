import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;
const BODY = { fontFamily: "'DM Sans', sans-serif" } as const;

const services = [
  {
    number: "01",
    name: "Web Design &\nDevelopment",
    description:
      "Custom-built websites that are fast, beautiful, and built to convert. From simple brochure sites to complex web applications — we design and develop end-to-end.",
    tags: ["UX/UI Design", "React", "Responsive", "Performance"],
  },
  {
    number: "02",
    name: "Hosting & Domain\nManagement",
    description:
      "We handle the technical side so you never have to. Secure, high-performance hosting with uptime monitoring, SSL management, and domain registration taken care of.",
    tags: ["Cloud Hosting", "SSL", "Uptime Monitoring", "DNS"],
  },
  {
    number: "03",
    name: "Brand Identity\n& Logo Design",
    description:
      "Your brand is more than a logo. We craft visual identities that communicate who you are — including logo design, colour palettes, typography systems, and brand guidelines.",
    tags: ["Logo Design", "Brand Strategy", "Style Guides", "Print Assets"],
  },
  {
    number: "04",
    name: "Social Media\nManagement",
    description:
      "From strategy and content creation to scheduling and analytics. We offer consultations to set you up for success, or full ongoing management to grow your audience.",
    tags: ["Strategy", "Content Creation", "Analytics", "Community"],
  },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="services" className="px-8 md:px-12 py-24 md:py-36 bg-background" ref={ref}>
      {/* Section header */}
      <motion.div
        className="flex items-center justify-between mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-5">
          <span
            style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
            className="text-muted-foreground"
          >
            01
          </span>
          <div className="w-10 h-px bg-border" />
          <span
            style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
            className="text-muted-foreground"
          >
            What We Do
          </span>
        </div>
        <h2
          style={{ ...DISPLAY, fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em", textTransform: "uppercase" }}
          className="text-foreground"
        >
          Our Services
        </h2>
      </motion.div>

      {/* Service rows */}
      <div className="border-t border-border">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            className="border-b border-border cursor-pointer group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
          >
            <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
              {/* Number */}
              <span
                style={{ ...DISPLAY, fontWeight: 400, fontSize: "0.875rem", letterSpacing: "0.08em", minWidth: "60px" }}
                className="text-muted-foreground"
              >
                {service.number}
              </span>

              {/* Name */}
              <div className="flex-1 md:pl-4">
                <h3
                  style={{
                    ...DISPLAY,
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 5vw, 4.5rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    whiteSpace: "pre-line",
                    color: hovered === i ? "#C9FF00" : "var(--foreground)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.name}
                </h3>
              </div>

              {/* Description — revealed on hover */}
              <motion.div
                className="md:w-80 overflow-hidden"
                animate={{ opacity: hovered === i ? 1 : 0, height: hovered === i ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <p
                  style={{ ...BODY, fontSize: "0.9rem", lineHeight: 1.65 }}
                  className="text-muted-foreground"
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2.5 py-1"
                      style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Arrow */}
              <div
                className="md:pl-8 self-start md:self-auto"
                style={{
                  color: hovered === i ? "#C9FF00" : "var(--muted-foreground)",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  transform: hovered === i ? "translateX(4px) translateY(-4px)" : "none",
                }}
              >
                <ArrowUpRight size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
