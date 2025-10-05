import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";

// Import project images
import tregoApp from "@/assets/Trego.png";
import recipeApp from "@/assets/hotal-app.jpeg";
import petApp from "@/assets/Trego3.png";
import InvestmentApp from "@/assets/investment-app.png";  
import bookApp from "@/assets/book-app.png";
import realestateApp from "@/assets/reatestate-app.png";
import ecommerceApp from "@/assets/Eco.png";
import fastDeliverySite from "@/assets/FastDelivery2.png";

const Projects = () => {
  const mobileProjects = [
    {
      title: "Trego App",
      description: "Modern mobile application with advanced features",
      image: tregoApp,
      tech: ["React Native", "Firebase", "Expo"],
      type: "mobile"
    },
    {
      title: "Food Recipe App",
      description: "Displaying categorized recipes with Firebase backend",
      image: recipeApp,
      tech: ["React Native", "Firebase", "Redux"],
      type: "mobile"
    },
    {
      title: "Pet Adoption App",
      description: "Pet listings and filters using Firebase",
      image: petApp,
      tech: ["React Native", "Firebase", "Navigation"],
      type: "mobile"
    },
    {
      title: "Investment App",
      description: "Peer-to-peer sharing powered by Appwrite",
      image: InvestmentApp,
      tech: ["React Native", "Appwrite", "File Management"],
      type: "mobile"
    },
    {
      title: "Book Recommendation App",
      description: "Smart book suggestions with custom backend",
      image: bookApp,
      tech: ["React Native", "Node.js", "MongoDB"],
      type: "mobile"
    }
  ];

  const webProjects = [
    {
      title: "Real Estate Web App",
      description: "Property listings, search features, and admin dashboard with custom backend",
      image: realestateApp,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      type: "web"
    },
    {
      title: "E-Commerce Web App",
      description: "Dynamic product catalog, cart system, and user authentication",
      image: ecommerceApp,
      tech: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
      type: "web"
    },
    {
      title: "FastDeliverySite",
      description: "Fast delivery service platform with real-time tracking and order management",
      image: fastDeliverySite,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      type: "web"
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div
      className="bg-gradient-card border border-white/10 rounded-xl overflow-hidden hover:shadow-card transition-smooth hover:scale-105 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm">
            {project.type === 'mobile' ? (
              <Smartphone className="w-3 h-3 mr-1" />
            ) : (
              <Globe className="w-3 h-3 mr-1" />
            )}
            {project.type === 'mobile' ? 'Mobile' : 'Web'}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs bg-primary/10 border-primary/30 hover:bg-primary/20 transition-smooth"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of mobile and web applications I've built using modern technologies
          </p>
        </div>

        {/* Mobile Apps Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Smartphone className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold">Mobile Applications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Web Apps Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Web Applications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 6} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="animate-glow">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;