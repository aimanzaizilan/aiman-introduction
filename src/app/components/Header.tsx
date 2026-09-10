import { Button } from "./ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">
                AZ
              </span>
            </div>
            <span className="text-lg">AIMAN ZAIZILAN</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("career")}
              className="hover:text-primary transition-colors"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/konkemaphisa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/konke-maphisa-92bb11250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
            </a>
            <a href="mailto:maphisakonke@gmail.com">
              <Mail className="w-5 h-5 hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("career")}
                className="text-left hover:text-primary transition-colors"
              >
                Career
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/konkemaphisa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/konke-maphisa-92bb11250"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
                <a href="mailto:maphisakonke@gmail.com">
                  <Mail className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}