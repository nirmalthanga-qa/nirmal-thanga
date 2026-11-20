import { useEffect, useState } from "react";
import { About } from "./components/About";
import { BackToTop } from "./components/BackToTop";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Interests } from "./components/Interests";
import { MenuOverlay } from "./components/MenuOverlay";
import { Projects } from "./components/Projects";
import { QualityFlow } from "./components/QualityFlow";
import { Stack } from "./components/Stack";
import { SvgDefs } from "./components/SvgDefs";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // The menu styles hang off classes on <body> (see global.css), so mirror the state there.
  useEffect(() => {
    document.body.classList.toggle("menu", menuOpen);
    document.body.classList.toggle("lock", menuOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <SvgDefs />
      <Header open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
      <MenuOverlay onNavigate={() => setMenuOpen(false)} />
      <main id="top">
        <Hero />
        <About />
        <Education />
        <QualityFlow />
        <Stack />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
