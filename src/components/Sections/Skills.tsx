import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Settings, Globe, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 92, color: "from-blue-600 to-blue-700" },
        { name: "JavaScript ES6+", level: 95, color: "from-yellow-500 to-orange-500" },
        { name: "Redux", level: 88, color: "from-purple-500 to-pink-500" },
        { name: "HTML5 & CSS3", level: 98, color: "from-orange-500 to-red-500" },
      ]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
        { name: "RESTful APIs", level: 90, color: "from-indigo-500 to-purple-500" },
        { name: "Express.js", level: 82, color: "from-orange-500 to-orange-600" },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      skills: [
        { name: "Git & GitHub", level: 95, color: "from-green-500 to-green-700" },
        { name: "Docker", level: 78, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "Webpack", level: 85, color: "from-blue-300 to-blue-500" },
        { name: "Jest Testing", level: 80, color: "from-red-400 to-red-600" },
      ]
    }
  ];

  const additionalSkills = [
    "SCSS/Sass", "Bootstrap", "Tailwind CSS", "Material-UI", "Figma", "Photoshop",
    "Responsive Design", "Cross-browser Compatibility", "Performance Optimization",
    "Code Review", "Team Leadership", "Agile/Scrum", "CI/CD", "Microservices"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-primary/10 font-mono text-xs">
          {"const skills = {"}
        </div>
        <div className="absolute bottom-20 right-10 text-primary/10 font-mono text-xs">
          {"};"}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-smooth animated-border animate-fade-in-scale"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-primary font-semibold">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress value={skill.level} className="h-2" />
                          <div 
                            className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="animate-fade-in-scale">
            <h3 className="text-xl font-semibold mb-8 text-center">
              Additional <span className="text-primary">Expertise</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {additionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-smooth text-center animated-border"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-smooth">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-scale">
            <div className="text-center p-6 bg-card rounded-lg border border-border animated-border">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border animated-border">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">150K+</div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border animated-border">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">APIs Integrated</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border animated-border">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">70+</div>
              <div className="text-sm text-muted-foreground">UI Components</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;