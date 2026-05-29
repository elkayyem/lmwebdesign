import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { Services } from "./components/Services";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <main>
        <Hero />
        <MarqueeStrip />
        <Services />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
