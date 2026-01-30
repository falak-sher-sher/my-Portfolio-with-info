import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import heroImage from "@/assets/background.jpg";
import Profile from  "@/assets/Falak_sher-removebg-preview.png";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-secondary rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto animate-slide-up pt-24 sm:pt-0">


        <div className="mb-6">
          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/923263853964"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-colors"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={32} />
          </a>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in leading-tight px-2 break-words max-w-[100vw]">
            We are a <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary drop-shadow-lg inline-block">Team of Developers</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 font-light tracking-wide px-4">
            Full-Stack Web & Mobile App Experts
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 text-sm sm:text-base">
          <MapPin className="w-4 h-4" />
          <span>Lahore, Pakistan</span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed px-4">
          Specializing in <span className="text-primary font-semibold">React</span>, 
          <span className="text-accent font-semibold"> React Native</span>, and 
          <span className="text-secondary font-semibold"> Node.js</span>, 
          we build user-centric apps that combine sleek design with robust backend integration.
        </p>

        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mb-12 px-2">
          <Button 
            variant="hero" 
            size="lg" 
            className="group text-xs sm:text-base px-3 sm:px-8 py-2 h-auto"
            onClick={scrollToContact}
          >
            <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Get In Touch
          </Button>
          <Button variant="glass" size="lg" className="group text-xs sm:text-base px-3 sm:px-8 py-2 h-auto">
            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            <a href="https://github.com/falak-sher-sher">View GitHub</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          <div className="bg-card/10 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-6 hover:bg-white/5 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20 group">
            <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2 group-hover:text-primary/80 transition-colors">200+</div>
            <div className="text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">LeetCode Problems</div>
          </div>
          <div className="bg-card/10 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-6 hover:bg-white/5 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/20 group">
            <div className="text-xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2 group-hover:text-accent/80 transition-colors">15+</div>
            <div className="text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects Built</div>
          </div>
          <div className="bg-card/10 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-6 hover:bg-white/5 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-secondary/20 group">
            <div className="text-xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2 group-hover:text-secondary/80 transition-colors">2+</div>
            <div className="text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="bg-card/10 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-6 hover:bg-white/5 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20 group">
            <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2 group-hover:text-primary/80 transition-colors">100%</div>
            <div className="text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Passion Driven</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;