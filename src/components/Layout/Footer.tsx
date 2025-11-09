import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/prak-mtl"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://linkedin.com/in/prakmtl"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:prak.mtl@outlook.com"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      url: "#"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-4 left-10 text-primary/10 font-mono text-xs">
          {"// Thanks for visiting!"}
        </div>
        <div className="absolute top-4 right-10 text-primary/10 font-mono text-xs">
          {"</portfolio>"}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Prakhar Mittal
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Senior Frontend Developer with 8+ years of experience building 
                scalable, performant web applications.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 text-primary transition-smooth hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "#about" },
                  { label: "Experience", href: "#experience" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Services", href: "#services" },
                  { label: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.href.slice(1));
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                  <a 
                    href="mailto:prak.mtl@outlook.com"
                    className="text-sm text-foreground hover:text-primary transition-smooth"
                  >
                    prak.mtl@outlook.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Phone</p>
                  <a 
                    href="tel:+919456062533"
                    className="text-sm text-foreground hover:text-primary transition-smooth"
                  >
                    +91-9456062533
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</p>
                  <span className="inline-flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                    Available for projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
                © {currentYear} Prakhar Mittal. Built with React & TypeScript.
              </div>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Made with ❤️ in India</span>
                <div className="w-px h-4 bg-border" />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;