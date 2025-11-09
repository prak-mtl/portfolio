import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, TrendingUp, Users2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tekion",
      location: "Remote",
      period: "Aug 2022 – Present",
      achievements: [
        "Led team of 10 developers; improved delivery by 20%",
        "Maintained 99.9% uptime across all applications",
        "Built intricate configuration systems reducing dev time by 30%",
        "Implemented scalable architecture for automotive solutions"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Next.js", "Redux", "AWS", "Docker", "AI/ML integration", "MCP", "CI/CD Pipeline design", "Playwright", "Jest", "RTL", "MongoDB"]
    },
    {
      title: "Senior Frontend Developer",
      company: "PagarBook",
      location: "Bangalore, India",
      period: "Aug 2020 – Aug 2022",
      achievements: [
        "Led 8 developers; improved feature delivery by 25%",
        "Drove 30% increase in user engagement",
        "Architected fintech solutions for SMBs",
        "Implemented real-time payment processing features"
      ],
      technologies: ["React", "Redux", "JavaScript", "REST APIs", "CSS3"]
    },
    {
      title: "Frontend Developer",
      company: "Lisec Automation",
      location: "Gurgaon, India",
      period: "Jan 2020 – Jul 2020",
      achievements: [
        "Developed 15 key features for automation platform",
        "Improved user engagement by 40%",
        "Collaborated with industrial automation teams",
        "Optimized performance for manufacturing workflows"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Frontend Developer",
      company: "Moonraft",
      location: "Bangalore, India",
      period: "Jul 2018 – Nov 2019",
      achievements: [
        "Delivered 3 end-to-end projects successfully",
        "Reduced time-to-market by 20%",
        "Implemented responsive design patterns",
        "Enhanced user experience across multiple platforms"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "RESTful APIs"]
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Gloify",
      location: "Remote",
      period: "Sep 2017 – May 2018",
      achievements: [
        "Designed user interfaces using Photoshop",
        "Implemented UX improvements via React",
        "Created design systems and component libraries",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["React", "JavaScript", "Photoshop", "HTML5", "CSS3"]
    }
  ];

  const companyLinks: Record<string, string> = {
    Tekion: "https://tekion.com/",
    PagarBook: "https://pagarbook.com/",
    "Lisec Automation": "https://www.lisec.com/",
    Moonraft: "https://www.ust.com/en/evolve",
    Gloify: "https://gloify.com/",
  };


  return (
    <section id="experience" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 text-primary/10 font-mono text-xs">
          {"<Experience />"}
        </div>
        <div className="absolute bottom-20 left-10 text-primary/10 font-mono text-xs">
          {"// Professional Journey"}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A journey of growth, leadership, and technical excellence across diverse industries
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-smooth animated-border animate-fade-in-scale"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                        <TrendingUp className="w-4 h-4" />
                        {companyLinks[exp.company] ? (
                          <a
                            href={companyLinks[exp.company]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <CalendarDays className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Right Column - Achievements & Technologies */}
                    <div className="lg:col-span-2">
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                          <Users2 className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-scale">
            <div className="text-center p-6 bg-card rounded-lg border border-border animated-border">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border animated-border">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Companies Worked</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border animated-border">
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground">Team Members Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;