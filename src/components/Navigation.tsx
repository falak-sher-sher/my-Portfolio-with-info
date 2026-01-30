import { Button } from "@/components/ui/button";
import { Menu, X, Github, Mail, User as UserIcon, Briefcase, Users, Cpu } from "lucide-react";
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
    { name: 'About', href: '#about', icon: <UserIcon className="w-5 h-5" /> },
    { name: 'Skills', href: '#skills', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Team', href: '#team', icon: <Users className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },
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
          {/* Mobile Menu Button - Moved to left */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-smooth text-slate-900 -ml-2"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo Placeholder */}
          <div className="w-8 hidden md:block"></div>

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
          
          {/* Mobile Actions - Show minimal actions on right */}
          <div className="md:hidden flex items-center gap-2">
             {/* Removed extra mail icon as per request to keep header clean */}
          </div>
        </div>

        {/* Mobile Navigation Sidebar (Drawer) */}
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#22D3EE] shadow-2xl transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="p-6 flex justify-between items-center border-b border-slate-900/10">
              <span className="text-xl font-bold text-slate-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-900/10 text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col space-y-2 px-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex w-full items-center space-x-4 px-4 py-3 rounded-xl text-slate-900 font-medium hover:bg-slate-900/10 hover:translate-x-1 transition-all duration-300 group"
                  >
                    <span className="p-2 bg-slate-900/5 rounded-lg group-hover:bg-slate-900/10 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-lg">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-slate-900/10 space-y-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-start text-slate-900 border-slate-900/20 hover:bg-slate-900/10 hover:text-slate-900 bg-transparent"
              >
                <Github className="w-5 h-5 mr-3" />
                <a href="https://github.com/falak-sher-sher" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;