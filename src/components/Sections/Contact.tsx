import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, ExternalLink, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prak.mtl@outlook.com",
      link: "mailto:prak.mtl@outlook.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9456062533",
      link: "tel:+919456062533"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prakmtl",
      link: "https://linkedin.com/in/prakmtl"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/prak-mtl",
      link: "https://github.com/prak-mtl"
    }
  ];

  const additionalLinks = [
    {
      label: "StackOverflow",
      link: "https://stackoverflow.com/users/9478145/prakhar-mittal",
      icon: ExternalLink
    },
    {
      label: "Behance Portfolio",
      link: "https://www.behance.net/prakmtlf2b0",
      icon: ExternalLink
    },
    {
      label: "Dribbble Shots",
      link: "https://dribbble.com/prak_mtl",
      icon: ExternalLink
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-primary/10 font-mono text-xs">
          {"// Let's Connect"}
        </div>
        <div className="absolute bottom-20 right-10 text-primary/10 font-mono text-xs">
          {"</contact>"}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="animated-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="border-border focus:border-primary focus:ring-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium transition-spring hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                {/* Direct Contact */}
                <Card className="animated-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      {contactInfo.map((contact, index) => (
                        <div key={index} className="flex items-center space-x-4 group">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                            <contact.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{contact.label}</div>
                            <a 
                              href={contact.link}
                              className="text-foreground hover:text-primary transition-smooth font-medium"
                              target={contact.link.startsWith('http') ? '_blank' : undefined}
                              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Links */}
                <Card className="animated-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Find Me Online</h3>
                    <div className="space-y-4">
                      {additionalLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-smooth group"
                        >
                          <span className="text-foreground group-hover:text-primary transition-smooth">
                            {link.label}
                          </span>
                          <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="animated-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Response Time</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">&lt; 24h</div>
                        <div className="text-sm text-muted-foreground">Email Response</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Available</div>
                        <div className="text-sm text-muted-foreground">For New Projects</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;