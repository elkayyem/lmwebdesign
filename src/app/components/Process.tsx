import { useRef } from "react";
import { motion, useInView } from "motion/react";

const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;
const BODY = { fontFamily: "'DM Sans', sans-serif" } as const;

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with a deep dive into your business, goals, and audience. Understanding the 'why' behind your project shapes every decision we make.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "From wireframes to high-fidelity mockups, we craft a visual direction that aligns with your brand and sets the stage for a compelling digital presence.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "We develop your site with precision — clean code, lightning performance, and pixel-perfect execution. Then we deploy and go live with confidence.",
  },
  {
    number: "04",
    title: "Grow & Maintain",
    description:
      "Post-launch is just the beginning. We offer ongoing support, hosting management, and marketing services to help your digital presence thrive.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="process" className="bg-[#0d0d0d] px-8 md:px-12 py-24 md:py-36" ref={ref}>
      {/* Section header */}
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div>
          <div className="flex items-center gap-5 mb-5">
            <span
              style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
              className="text-muted-foreground"
            >
              03
            </span>
            <div className="w-10 h-px bg-border" />
            <span
              style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
              className="text-muted-foreground"
            >
              How We Work
            </span>
          </div>
          <h2
            style={{
              ...DISPLAY,
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
            className="text-foreground"
          >
            Our
            <br />
            <span style={{ color: "#C9FF00" }}>Process</span>
          </h2>
        </div>
        <p
          style={{ ...BODY, fontSize: "1rem", lineHeight: 1.7, maxWidth: "340px" }}
          className="text-muted-foreground"
        >
          A clear, collaborative process from first conversation to final launch — and beyond. No guesswork, no surprises.
        </p>
      </motion.div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className={`border-b md:border-b-0 md:border-r border-border last:border-r-0 py-10 md:py-12 md:pr-8 ${i === 0 ? "md:pl-0" : "md:pl-8"} group`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
          >
            <div>
              <span
                style={{ ...DISPLAY, fontWeight: 300, fontSize: "3.5rem", letterSpacing: "-0.04em", color: "#C9FF00", lineHeight: 1 }}
                className="block mb-6"
              >
                {step.number}
              </span>
              <h3
                style={{ ...DISPLAY, fontWeight: 800, fontSize: "1.75rem", letterSpacing: "-0.01em", textTransform: "uppercase", lineHeight: 1 }}
                className="text-foreground mb-4"
              >
                {step.title}
              </h3>
              <p
                style={{ ...BODY, fontSize: "0.9rem", lineHeight: 1.7 }}
                className="text-muted-foreground"
              >
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
