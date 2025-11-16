import { Button } from "@/components/ui/button";
import { Target, Heart, Code, Download } from "lucide-react";

const About = () => {
  const goals = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Production-Ready Apps",
      description: "Launch seamless apps with user/admin dashboards"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "GitHub Collaboration",
      description: "Improve team workflows and version control"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Technical Leadership",
      description: "Strengthen communication in full-stack development"
    }
  ];

  

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer from Lahore, Pakistan, dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Falak, a Full-Stack Web and Mobile App Developer based in Lahore, Pakistan. 
                I specialize in React, React Native, Node.js, Express, MongoDB, and Redux Toolkit. 
                My passion lies in building user-centric applications that seamlessly combine 
                elegant design with robust backend integration.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-accent" />
                </div>
                Problem Solving
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 150 problems solved on LeetCode, I've honed my algorithmic thinking 
                and problem-solving skills. This foundation helps me approach complex development 
                challenges with analytical precision and innovative solutions.
              </p>
            </div>

            <Button variant="hero" className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Goals */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Current Goals</h3>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={goal.title}
                  className="bg-gradient-card p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      {goal.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{goal.title}</h4>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
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