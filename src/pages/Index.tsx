import Navigation from "@/components/Layout/Navigation";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Skills from "@/components/Sections/Skills";
import Projects from "@/components/Sections/Projects";
import Services from "@/components/Sections/Services";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
