import logoCream from "@/assets/logo-cream-cropped.png";

const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;
const BODY = { fontFamily: "'DM Sans', sans-serif" } as const;

export function Footer() {
  const year = new Date().getFullYear();

  const services = [
    "Web Design & Development",
    "Hosting & Domain Management",
    "Brand Identity & Logos",
    "Social Media Management",
  ];

  const links = [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter/X", href: "#" },
    { label: "Dribbble", href: "#" },
  ];

  return (
    <footer className="bg-background border-t border-border px-8 md:px-12 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center text-foreground mb-4">
            <img
              src={logoCream}
              alt="LM Web Creators"
              style={{ height: 44, width: "auto", display: "block" }}
            />
          </a>
          <p
            style={{ ...BODY, fontSize: "0.9rem", lineHeight: 1.7 }}
            className="text-muted-foreground"
          >
            Digital experiences for brands that refuse to be ordinary. Web design, hosting, brand identity & social media.
          </p>
        </div>

        {/* Services */}
        <div>
          <span
            style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
            className="text-muted-foreground block mb-6"
          >
            Services
          </span>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  style={{ ...BODY, fontSize: "0.9rem" }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <span
            style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
            className="text-muted-foreground block mb-6"
          >
            Connect
          </span>
          <a
            href="mailto:hello@lmwebcreators.com"
            className="text-foreground hover:text-[#C9FF00] transition-colors duration-300 block mb-2"
            style={{ ...BODY, fontSize: "0.9375rem" }}
          >
            hello@lmwebcreators.com
          </a>
          <a
            href="tel:+447472899333"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 block mb-8"
            style={{ ...BODY, fontSize: "0.9rem" }}
          >
            +44 (0) 7472 899333
          </a>
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-[#C9FF00] transition-colors duration-300"
                style={{ ...BODY, fontSize: "0.8rem" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Big logo mark */}
      <div className="border-t border-border pt-10 mb-8 overflow-hidden">
        <span
          style={{
            ...DISPLAY,
            fontWeight: 900,
            fontSize: "clamp(5rem, 20vw, 18rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: "rgba(240,237,231,0.04)",
            userSelect: "none",
            display: "block",
          }}
        >
          LM WEB
        </span>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-border">
        <span
          style={{ ...BODY, fontSize: "0.8rem", letterSpacing: "0.04em" }}
          className="text-muted-foreground"
        >
          © {year} LM Web Creators. All rights reserved.
        </span>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              style={{ ...BODY, fontSize: "0.8rem" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
