import { Button } from "@/components/ui/button";
import { Target, Heart, Code, Download } from "lucide-react";

const About = () => {
  const goals = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Enterprise-Grade Solutions",
      description: "Engineering robust, scalable architectures that drive business growth and operational efficiency."
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Technical Excellence",
      description: "Leveraging cutting-edge technologies and industry best practices to deliver superior code quality."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Strategic Partnership",
      description: "Fostering long-term success through transparent communication and dedicated technical stewardship."
    }
  ];

  

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate team of developers from Lahore, Pakistan, dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-primary/5 group">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                Who We Are
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are a dynamic team of Full-Stack Web and Mobile App Developers based in Lahore, Pakistan. 
                Our collective expertise spans <span className="text-primary font-medium">React</span>, <span className="text-accent font-medium">React Native</span>, Node.js, Express, MongoDB, and Redux Toolkit. 
                We are united by a passion for building user-centric applications that seamlessly combine 
                elegant design with robust backend integration.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-accent/20 transition-all duration-300 shadow-lg hover:shadow-accent/5 group">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                Our Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in algorithmic thinking and system design, we approach every challenge 
                with analytical precision. Having solved complex problems across various domains, we deliver 
                innovative solutions that are not just functional, but scalable and efficient.
              </p>
            </div>

            <Button variant="hero" className="w-full sm:w-auto group">
              <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Download Company Profile
            </Button>
          </div>

          {/* Goals */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 px-2">Our Core Values</h3>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={goal.title}
                  className="bg-card/30 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/30 hover:bg-white/5 transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      {goal.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{goal.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;