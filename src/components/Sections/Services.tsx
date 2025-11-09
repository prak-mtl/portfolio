import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Layers, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Design & UI Development",
      description: "Creating beautiful, user-centric interfaces with modern design principles and responsive layouts that work seamlessly across all devices.",
      features: [
        "Responsive Web Design",
        "UI/UX Implementation", 
        "Cross-browser Compatibility",
        "Accessibility Standards"
      ]
    },
    {
      icon: Layers,
      title: "Frontend Architecture Consultation",
      description: "Designing scalable frontend architectures and providing strategic guidance for complex web applications and development teams.",
      features: [
        "Architecture Planning",
        "Code Review & Optimization",
        "Technology Stack Selection",
        "Development Best Practices"
      ]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhancing application performance through code optimization, bundle analysis, and implementing industry best practices for faster load times.",
      features: [
        "Core Web Vitals Optimization",
        "Bundle Size Reduction",
        "Lazy Loading Implementation",
        "Caching Strategies"
      ]
    },
    {
      icon: Users,
      title: "Team Leadership & Mentoring",
      description: "Leading development teams and mentoring junior developers to achieve project goals while maintaining high code quality standards.",
      features: [
        "Technical Leadership",
        "Code Mentoring",
        "Process Improvement",
        "Knowledge Transfer"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 text-primary/10 font-mono text-xs">
          {"/* Services */"}
        </div>
        <div className="absolute bottom-20 left-10 text-primary/10 font-mono text-xs">
          {"// What I Offer"}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Services I <span className="text-primary">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive frontend development services backed by 8+ years of industry experience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-smooth animated-border animate-fade-in-scale h-full"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-8">
                  {/* Service Icon & Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-20 animate-fade-in-scale">
            <h3 className="text-2xl font-semibold mb-12 text-center">
              My <span className="text-primary">Process</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your requirements and project goals" },
                { step: "02", title: "Planning", description: "Creating detailed technical specifications and timelines" },
                { step: "03", title: "Development", description: "Building with clean, scalable, and maintainable code" },
                { step: "04", title: "Delivery", description: "Testing, optimization, and successful project handover" }
              ].map((phase, index) => (
                <div 
                  key={index} 
                  className="text-center group animate-fade-in"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                      {phase.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center animate-fade-in-scale">
            <div className="max-w-2xl mx-auto p-8 bg-card rounded-2xl border border-border animated-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your vision to life with modern, scalable web solutions.
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-spring hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;