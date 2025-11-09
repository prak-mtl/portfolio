import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Code, Globe } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{animationDelay: '1s'}} />

        {/* Code-like decorative lines */}
        <div className="absolute top-20 left-20 text-primary/20 font-mono text-sm animate-fade-in">
          {"<developer>"}
        </div>
        <div className="absolute bottom-20 right-20 text-primary/20 font-mono text-sm animate-fade-in" style={{animationDelay: '2s'}}>
          {"</developer>"}
        </div>

        {/* Animated border lines */}
        <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent animate-fade-in" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-t from-primary/50 to-transparent animate-fade-in" style={{animationDelay: '3s'}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-[7rem] lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              <span>Senior Frontend Engineer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Prakhar Mittal
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Building scalable, performant, and beautiful web experiences with{" "}
              <span className="text-primary font-semibold">8+ years</span> of expertise
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                variant="outline"
                onClick={scrollToProjects}
                className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-spring hover:scale-105"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Team Members Led</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Section */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Profile Image Container */}
              {/* Orbiting CV Widget */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center mt-6">
                {/* Inner clickable CV circle */}
                <a
                  href="/portfolio/Prakhar_Mittal_8+_years_Frontend_Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Resume in new tab"
                  className="group absolute inset-12 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <span className="font-mono text-sm sm:text-base group-hover:scale-105 transition-transform select-none">
                    &lt;Download CV/&gt;
                  </span>
                </a>


                {/* Outer orbit */}
                <div className="absolute inset-0 rounded-full border border-primary/40 animate-[spin_18s_linear_infinite] pointer-events-none">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
                  <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary/80" />
                </div>

                {/* Middle orbit (reverse) */}
                <div
                  className="absolute inset-4 rounded-full border border-primary/30 animate-[spin_12s_linear_infinite] pointer-events-none"
                  style={{ animationDirection: "reverse" }}
                >
                  <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/80" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/60" />
                </div>

                {/* Inner orbit */}
                <div className="absolute inset-8 rounded-full border border-primary/20 animate-[spin_24s_linear_infinite] pointer-events-none">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/60" />
                </div>
              </div>

              {/* <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-gradient-dark border border-primary/30 p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for profile image
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Globe className="w-24 h-24 text-primary/50" />
                  </div>

                  {/* Overlay effects
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

                  {/* Floating tech icons
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary text-xs animate-glow-pulse">
                    React
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center text-accent text-xs animate-glow-pulse" style={{animationDelay: '1s'}}>
                    TS
                  </div>
                </div>
              </div> */}

              {/* Decorative elements around profile */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary rounded-tl-lg animate-fade-in" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-primary rounded-tr-lg animate-fade-in" style={{animationDelay: '0.5s'}} />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-primary rounded-bl-lg animate-fade-in" style={{animationDelay: '1s'}} />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary rounded-br-lg animate-fade-in" style={{animationDelay: '1.5s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;