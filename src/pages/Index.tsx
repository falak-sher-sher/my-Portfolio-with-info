import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
