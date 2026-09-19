import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import LogicBreakdown from "@/components/portfolio/LogicBreakdown";
import Contact from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white antialiased">
      <Nav />
      <Hero />
      <Projects />
      <LogicBreakdown />
      <Contact />
    </div>
  );
}
