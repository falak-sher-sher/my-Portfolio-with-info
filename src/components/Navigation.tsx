import { Button } from "@/components/ui/button";
import { Menu, X, Github, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#22D3EE] border-b border-primary/20 shadow-lg shadow-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Removed as per request */}
          <div className="w-8"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-900 font-bold hover:text-white transition-colors relative group text-sm uppercase tracking-wider"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-900 hover:text-white hover:bg-slate-900/20">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="default" size="sm" onClick={() => scrollToSection('#contact')} className="bg-slate-900 text-white hover:bg-slate-800">
              <Mail className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-smooth text-slate-900"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 shadow-card">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-smooth py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="hero" size="sm" className="flex-1" onClick={() => scrollToSection('#contact')}>
                  <Mail className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;