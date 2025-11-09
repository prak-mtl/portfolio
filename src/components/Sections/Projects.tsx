import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

const Projects = () => {
  const liveProjects = [
    {
      title: "Falhari",
      description: "E-commerce platform for organic food products with real-time inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://falhari.com/",
      image: "/falhari.png"
    },
    {
      title: "Arrivae",
      description: "Travel booking platform with dynamic pricing and accommodation management",
      technologies: ["React", "TypeScript", "PostgreSQL", "AWS"],
      link: "https://arrivae.com/",
      image: "/arrivae.png"
    },
    {
      title: "Aaho",
      description: "Logistics and transportation management system for freight companies",
      technologies: ["React", "Redux", "Node.js", "MySQL"],
      link: "https://aaho.surge.sh/",
      image: "/aaho.png"
    },
    {
      title: "Yogaa",
      description: "Wellness and yoga platform with live streaming and class scheduling",
      technologies: ["React", "WebRTC", "Express.js", "MongoDB"],
      link: "https://yogaa.surge.sh/",
      image: "/yogaa.png"
    },
    {
      title: "Stanza Living",
      description: "Co-living space management platform with booking and tenant management",
      technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
      link: "https://www.stanzaliving.com/",
      image: "/stanza.png"
    }
  ];

  const githubProjects = [
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and responsive design",
      technologies: ["React", "API Integration", "CSS3"],
      githubLink: "https://github.com/prak-mtl/weather-app"
    },
    {
      title: "Album Carousel",
      description: "Interactive image carousel component with smooth transitions and touch support",
      technologies: ["JavaScript", "CSS Animations", "HTML5"],
      githubLink: "https://github.com/prak-mtl/album-carousel"
    },
    {
      title: "Currency Converter",
      description: "Multi-currency converter with real-time exchange rates and historical data",
      technologies: ["React", "External APIs", "Charts.js"],
      githubLink: "https://github.com/prak-mtl/currency-converter"
    },
    {
      title: "Address Book",
      description: "Contact management application with search, filtering, and local storage",
      technologies: ["React", "Local Storage", "Material-UI"],
      githubLink: "https://github.com/prak-mtl/address-book"
    },
    {
      title: "Feedback Form",
      description: "Dynamic feedback collection system with validation and data visualization",
      technologies: ["React", "Form Validation", "Chart.js"],
      githubLink: "https://github.com/prak-mtl/feedback-form"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-primary/10 font-mono text-xs">
          {"// Featured Projects"}
        </div>
        <div className="absolute bottom-20 right-10 text-primary/10 font-mono text-xs">
          {"<Portfolio />"}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of production-ready applications and innovative solutions across various industries
            </p>
          </div>

          {/* Live Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Live <span className="text-primary">Websites</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group hover:border-primary/50 transition-smooth animated-border animate-fade-in-scale overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="relative overflow-hidden">
                    {/* Project Image */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-smooth"
                      >
                        View Live
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-primary/30 hover:border-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* GitHub Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              GitHub <span className="text-primary">Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {githubProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group hover:border-primary/50 transition-smooth animated-border animate-slide-in-left"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Code2 className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {project.title}
                        </h4>
                      </div>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        View Code
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-primary/30 hover:border-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="text-center animate-fade-in-scale">
            <h3 className="text-xl font-semibold mb-6">
              Design <span className="text-primary">Portfolio</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.behance.net/prakmtlf2b0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-smooth"
              >
                Behance Portfolio
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/prak-mtl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-smooth"
              >
                GitHub Profile
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;