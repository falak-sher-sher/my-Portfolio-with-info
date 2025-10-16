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
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-secondary rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto animate-slide-up">


        <div className="mb-6">
          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/923014521927"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-colors"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={32} />
          </a>

          <p className="text-accent text-lg mb-2 font-medium">👋 Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Falak</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Full-Stack Web & Mobile App Developer
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4" />
          <span>Lahore, Pakistan</span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Specializing in <span className="text-primary font-semibold">React</span>, 
          <span className="text-accent font-semibold"> React Native</span>, and 
          <span className="text-secondary font-semibold"> Node.js</span>. 
          I build user-centric apps that combine sleek design with robust backend integration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="xl" 
            className="group"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Get In Touch
          </Button>
          <Button variant="glass" size="xl" className="group">
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            <a href="https://github.com/falak-sher-sher">View GitHub</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">LeetCode Problems</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-accent">8+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-secondary">1.5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Passion Driven</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;