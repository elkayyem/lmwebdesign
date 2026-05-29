import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";
import logoCream from "@/assets/logo-cream-cropped.png";

const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;
const BODY = { fontFamily: "'DM Sans', sans-serif" } as const;

function Logo({ height = 36, onClick }: { height?: number; onClick?: () => void }) {
  return (
    <a href="#" onClick={onClick} className="flex items-center text-foreground">
      <img
        src={logoCream}
        alt="LM Web Creators"
        style={{ height, width: "auto", display: "block" }}
      />
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex items-center justify-between transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(240,237,231,0.08)" : "none",
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Logo />

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              style={{ ...BODY, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-border px-6 py-2.5 hover:bg-[#C9FF00] hover:text-[#080808] hover:border-[#C9FF00] transition-all duration-300"
            style={{ ...BODY, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#080808] flex flex-col px-8 py-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-16">
              <Logo onClick={() => setMenuOpen(false)} />
              <button onClick={() => setMenuOpen(false)} className="text-foreground p-1">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border py-6 text-foreground"
                  style={{ ...DISPLAY, fontWeight: 800, fontSize: "clamp(2.5rem, 10vw, 4rem)", letterSpacing: "-0.02em", textTransform: "uppercase" }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href="mailto:hello@lmwebcreators.com"
                style={{ ...BODY, fontSize: "0.875rem" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@lmwebcreators.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
