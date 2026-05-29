import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const DISPLAY = { fontFamily: "'Barlow Condensed', sans-serif" } as const;
const BODY = { fontFamily: "'DM Sans', sans-serif" } as const;

const projects = [
  {
    id: 1,
    title: "Hartwell & Co.",
    category: "Web Design & Development",
    year: "2024",
    description: "A premium e-commerce experience for a London-based lifestyle brand.",
    src: "https://images.unsplash.com/photo-1621111848501-8d3634f82336?w=900&h=700&fit=crop&auto=format",
    alt: "iMac displaying a web design project",
    large: true,
  },
  {
    id: 2,
    title: "Vesper Studio",
    category: "Brand Identity",
    year: "2024",
    description: "Complete visual identity for a boutique interior design studio.",
    src: "https://images.unsplash.com/photo-1763705857736-2b4f16a33758?w=700&h=520&fit=crop&auto=format",
    alt: "Brand identity cards and print collateral",
    large: false,
  },
  {
    id: 3,
    title: "Nour Social",
    category: "Social Media Management",
    year: "2025",
    description: "Ongoing social media strategy and content for a hospitality group.",
    src: "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?w=700&h=520&fit=crop&auto=format",
    alt: "Phone showing social media content",
    large: false,
  },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="work" className="px-8 md:px-12 py-24 md:py-36 bg-background" ref={ref}>
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
            02
          </span>
          <div className="w-10 h-px bg-border" />
          <span
            style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
            className="text-muted-foreground"
          >
            Selected Work
          </span>
        </div>
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          style={{ ...BODY, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Start a Project <ArrowUpRight size={14} />
        </a>
      </motion.div>

      {/* Projects grid — asymmetric layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Large featured project */}
        <motion.div
          className="md:row-span-2 group cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <ProjectCard project={projects[0]} />
        </motion.div>

        {/* Two smaller projects stacked */}
        {projects.slice(1).map((project, i) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 + i * 0.12 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* Footer link */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <a
          href="#contact"
          className="border-b border-muted-foreground pb-1 text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 flex items-center gap-2"
          style={{ ...BODY, fontSize: "0.875rem", letterSpacing: "0.06em" }}
        >
          Interested in working together? <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="overflow-hidden bg-card" style={{ aspectRatio: project.large ? "4/3" : "4/3" }}>
      <div className="relative size-full overflow-hidden">
        <ImageWithFallback
          src={project.src}
          alt={project.alt}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: "#1a1a1a" }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80"
        />
        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-end justify-between">
            <div>
              <span
                style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
                className="text-muted-foreground block mb-2"
              >
                {project.category}
              </span>
              <h3
                style={{ ...DISPLAY, fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1, letterSpacing: "-0.01em", textTransform: "uppercase" }}
                className="text-foreground"
              >
                {project.title}
              </h3>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span
                style={{ ...BODY, fontSize: "0.7rem", letterSpacing: "0.1em" }}
                className="text-muted-foreground"
              >
                {project.year}
              </span>
              <div
                className="w-10 h-10 border border-[rgba(240,237,231,0.3)] flex items-center justify-center group-hover:bg-[#C9FF00] group-hover:border-[#C9FF00] transition-all duration-300"
                style={{ color: "var(--foreground)" }}
              >
                <ArrowUpRight size={16} className="group-hover:text-[#080808] transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
