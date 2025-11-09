import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { GraduationCap, Code2, Users, Zap, Star, Clock } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "8+ Years Experience",
      description: "Extensive experience in responsive web application development"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Successfully led cross-functional teams up to 10 members"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Specialized in optimization and scalable architecture"
    }
  ];

  const techCategories = [
    {
      title: "Frontend Development",
      items: [
        "React.js (8+ years)",
        "Next.js",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Webpack"
      ]
    },
    {
      title: "Backend Development",
      items: [
        "Node.js (2+ years)",
        "RESTful APIs"
      ]
    },
    {
      title: "Cloud & DevOps",
      items: [
        "Docker",
        "CI/CD Pipeline Design",
        "Jenkins",
        "AWS"
      ]
    },
    {
      title: "Tools",
      items: [
        "Git",
        "GitHub Actions",
        "Vite"
      ]
    },
    {
      title: "Database",
      items: [
        "MongoDB",
        "MySQL"
      ]
    },
    {
      title: "AI & Emerging Tech",
      items: [
        "Model Context Protocol (MCP)",
        "AI/ML Integration",
        "LLM Implementation",
        "Prompt Engineering"
      ]
    },
    {
      title: "Testing & Quality",
      items: [
        "Jest",
        "ESLint",
        "React Testing Library (RTL)",
        "Playwright",
        "Unit Testing",
        "Integration Testing",
        "Performance Testing"
      ]
    },
    {
      title: "Architecture & Leadership",
      items: [
        "Component Libraries",
        "Design Systems",
        "Technical Leadership",
        "Team Scaling",
        "Mentoring",
        "Cross-functional Collaboration"
      ]
    }
  ];


  // Helpers for tooltips and subtle proficiency badges
  const parseItem = (item: string) => {
    const match = item.match(/^(.*?)(?:\s*\((.*?)\))?$/);
    const label = match ? match[1].trim() : item;
    const meta = match && match[2] ? match[2].trim() : null; // e.g., "9+ years", "ES6+", "RTL"
    return { label, meta };
  };

  const descriptions: Record<string, string> = {
    // Frontend
    "React.js": "Component-based UI library for building interactive UIs.",
    "Next.js": "React framework for SSR, SSG, routing, and performance.",
    "TypeScript": "Typed superset of JavaScript for safer, scalable code.",
    "Redux": "Predictable state management for complex apps.",
    "Tailwind CSS": "Utility-first CSS framework for rapid styling.",
    "Bootstrap": "Responsive CSS framework with components.",
    "HTML5": "Semantic, accessible markup for the web.",
    "CSS3": "Modern styling with animations and layout systems.",
    "JavaScript": "Modern JS with ES modules, async/await, ES6+ features.",
    "Webpack": "Module bundler for optimizing web assets.",

    // Backend
    "Node.js": "Event-driven runtime for building scalable servers.",
    "RESTful APIs": "Resource-oriented HTTP APIs with JSON payloads.",

    // Cloud & DevOps
    "Docker": "Containerization for consistent, portable deployments.",
    "CI/CD Pipeline Design": "Automated build, test, and deploy workflows.",
    "Jenkins": "Automation server for CI/CD.",
    "AWS": "Cloud services for compute, storage, and networking.",

    // Tools
    "Git": "Distributed version control and collaboration.",
    "GitHub Actions": "GitHub-native CI/CD workflows and automation.",
    "Vite": "Lightning-fast dev server and build tool.",

    // Database
    "MongoDB": "NoSQL document database for flexible schemas.",
    "MySQL": "Relational database with SQL queries and ACID.",

    // AI & Emerging Tech
    "Model Context Protocol": "Protocol to connect tools/data to AI agents.",
    "AI/ML Integration": "Embed ML models into product workflows.",
    "LLM Implementation": "Build features on top of large language models.",
    "Prompt Engineering": "Design prompts and retrieval to improve LLMs.",

    // Testing & Quality
    "Jest": "Delightful JavaScript testing framework.",
    "ESLint": "Static analysis to find and fix JS/TS problems.",
    "React Testing Library": "Test React via user interactions and DOM.",
    "Playwright": "Reliable end-to-end browser automation.",
    "Unit Testing": "Verify components in isolation.",
    "Integration Testing": "Test interactions across modules/services.",
    "Performance Testing": "Measure and optimize speed under load.",
  };

  const getDescription = (item: string) => {
    const { label } = parseItem(item);
    // Normalize some known labels
    const normalized = label
      .replace(/^JavaScript$/, "JavaScript")
      .replace(/^React Testing Library$/, "React Testing Library")
      .replace(/^Model Context Protocol$/, "Model Context Protocol");
    return descriptions[normalized] || "";
  };

  const renderItems = (items: string[]) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => {
        const { label, meta } = parseItem(item);
        const desc = getDescription(item);
        const content = (
          <Badge
            key={index}
            variant="outline"
            className="px-3 py-1.5 text-xs font-medium border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth cursor-default flex items-center gap-2"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <span>{label}</span>
            {meta && (
              <span className="ml-1 inline-flex items-center rounded-full bg-primary/10 text-primary border border-primary/20 px-1.5 py-[1px] text-[10px] leading-none gap-1">
                {/(years|year)/i.test(meta) ? (
                  <Clock className="w-3 h-3" />
                ) : (
                  <Star className="w-3 h-3" />
                )}
                <span>{meta}</span>
              </span>
            )}
          </Badge>
        );

        return desc ? (
          <Tooltip key={`${label}-${index}`}>
            <TooltipTrigger asChild>{content}</TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs text-xs text-muted-foreground">{desc}</p>
            </TooltipContent>
          </Tooltip>
        ) : (
          content
        );
      })}
    </div>
  );

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-primary/10 font-mono text-xs">
          {"/* About Section */"}
        </div>
        <div className="absolute bottom-20 right-10 text-primary/10 font-mono text-xs">
          {"// End About"}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Bio */}
            <div className="animate-slide-in-left">
              <h3 className="text-xl font-semibold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 8+ years of hands-on experience in responsive web application development,
                  I have honed my skills in utilizing React JS, Redux, TypeScript, Node JS, HTML5, CSS3,
                  Bootstrap, and RESTful web services to deliver high-quality solutions.
                </p>
                <p>
                  My track record includes successfully collaborating with cross-functional teams to
                  create user-centric applications that meet and exceed client expectations. I'm passionate
                  about performance optimization, scalable architecture, and mentoring development teams.
                </p>
              </div>

              {/* Education */}
              <div className="mt-8 p-6 bg-card rounded-lg border border-border animated-border">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Bachelor of Technology</h4>
                    <p className="text-sm text-muted-foreground">Information Technology</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  University Institute of Engineering and Technology
                </p>
                <p className="text-xs text-muted-foreground mt-1">2013 – 2017</p>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="animate-slide-in-right">
              <h3 className="text-xl font-semibold mb-6 text-primary">Key Highlights</h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="group hover:border-primary/50 transition-smooth animated-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                          <highlight.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                          <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="animate-fade-in-scale">
            <h3 className="text-xl font-semibold mb-6 text-center text-primary">Skills, Technologies & Tools</h3>
            <TooltipProvider>
              {/* Mobile: collapsible categories */}
              <div className="md:hidden">
                <Accordion type="single" collapsible className="w-full">
                  {techCategories.map((cat) => (
                    <AccordionItem key={cat.title} value={cat.title}>
                      <AccordionTrigger className="text-left">{cat.title}</AccordionTrigger>
                      <AccordionContent>
                        {renderItems(cat.items)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Desktop: grid cards */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                {techCategories.map((cat) => (
                  <Card key={cat.title} className="group hover:border-primary/50 transition-smooth animated-border">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-foreground mb-3">{cat.title}</h4>
                      {renderItems(cat.items)}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;