import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Send } from "lucide-react";

const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;
const BODY = { fontFamily: "'DM Sans', sans-serif" } as const;

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const services = ["Web Design & Development", "Hosting & Domain", "Brand Identity", "Social Media", "Full Package"];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#0d0d0d] px-6 md:px-12 py-24 md:py-36 overflow-hidden" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left: big CTA text */}
        <div className="min-w-0">
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
              04
            </span>
            <div className="w-10 h-px bg-border" />
            <span
              style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
              className="text-muted-foreground"
            >
              Contact
            </span>
          </motion.div>

          <motion.h2
            style={{
              ...DISPLAY,
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
            className="text-foreground mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
            LET'S
            <br />
            BUILD
            <br />
            <span style={{ color: "#C9FF00" }}>SOMETHING</span>
            <br />
            GREAT.
          </motion.h2>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="mailto:hello@lmwebcreators.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <span style={{ ...BODY, fontSize: "1.0625rem" }}>hello@lmwebcreators.com</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:+447472899333"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <span style={{ ...BODY, fontSize: "1.0625rem" }}>+44 (0) 7472 899333</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>

          <motion.div
            className="mt-12 pt-10 border-t border-border"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p
              style={{ ...BODY, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
              className="text-muted-foreground mb-4"
            >
              Follow us
            </p>
            <div className="flex gap-6">
              {["Instagram", "LinkedIn", "Twitter/X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-[#C9FF00] transition-colors duration-300"
                  style={{ ...BODY, fontSize: "0.875rem" }}
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: contact form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {submitted ? (
            <div className="border border-[#C9FF00] p-10 flex flex-col items-center justify-center gap-4" style={{ minHeight: "400px" }}>
              <span style={{ color: "#C9FF00", fontSize: "3rem" }}>✓</span>
              <h3
                style={{ ...DISPLAY, fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", letterSpacing: "-0.01em" }}
                className="text-foreground text-center"
              >
                Message Received
              </h3>
              <p
                style={{ ...BODY, fontSize: "0.9375rem", lineHeight: 1.6 }}
                className="text-muted-foreground text-center"
              >
                Thanks for reaching out. We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0 border-t border-border">
              {/* Name */}
              <div className="border-b border-border py-5">
                <label
                  style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  className="text-muted-foreground block mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full bg-transparent text-foreground placeholder-[var(--muted-foreground)] outline-none border-none focus:ring-0"
                  style={{ ...DISPLAY, fontWeight: 600, fontSize: "1.5rem", letterSpacing: "-0.01em" }}
                />
              </div>

              {/* Email */}
              <div className="border-b border-border py-5">
                <label
                  style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  className="text-muted-foreground block mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@yourcompany.com"
                  className="w-full bg-transparent text-foreground placeholder-[var(--muted-foreground)] outline-none border-none focus:ring-0"
                  style={{ ...DISPLAY, fontWeight: 600, fontSize: "1.5rem", letterSpacing: "-0.01em" }}
                />
              </div>

              {/* Service selector */}
              <div className="border-b border-border py-5">
                <label
                  style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  className="text-muted-foreground block mb-4"
                >
                  Service of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm({ ...form, service: s })}
                      className="px-4 py-2 border transition-all duration-200"
                      style={{
                        ...BODY,
                        fontSize: "0.75rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        borderColor: form.service === s ? "#C9FF00" : "var(--border)",
                        color: form.service === s ? "#C9FF00" : "var(--muted-foreground)",
                        backgroundColor: form.service === s ? "rgba(201, 255, 0, 0.05)" : "transparent",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="border-b border-border py-5">
                <label
                  style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  className="text-muted-foreground block mb-3"
                >
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your project, goals, and timeline..."
                  className="w-full bg-transparent text-foreground placeholder-[var(--muted-foreground)] outline-none border-none resize-none focus:ring-0"
                  style={{ ...BODY, fontSize: "1rem", lineHeight: 1.6 }}
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#C9FF00] text-[#080808] py-4 flex items-center justify-center gap-3 hover:bg-foreground hover:text-background transition-all duration-300 group"
                  style={{ ...DISPLAY, fontWeight: 800, fontSize: "1.125rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
