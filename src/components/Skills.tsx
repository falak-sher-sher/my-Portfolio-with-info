import { Code, Database, Globe, Smartphone, GitBranch, Zap, CreditCard } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "TypeScript", "Vue.js", "Redux Toolkit", "Tailwind CSS"],
      color: "primary"
    },
    {
      title: "Backend Engineering",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Django", "Laravel", "Express.js", "MongoDB", "PostgreSQL"],
      color: "secondary"
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "Kotlin", "Expo", "iOS & Android"],
      color: "accent"
    },
    {
      title: "Payment Integrations",
      icon: <CreditCard className="w-6 h-6" />,
      skills: ["Stripe", "Wave", "Orange Money", "Google Pay", "Mobile Money", "PayPal"],
      color: "primary"
    },
    {
      title: "Specialized Expertise",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Real-time Architecture", "API Design & Integration", "Performance Optimization", "Cloud Infrastructure", "System Security"],
      color: "secondary"
    },
    {
      title: "Tools & DevOps",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Docker", "AWS", "GitHub Actions", "CI/CD Pipelines", "Linux Administration"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 bg-card/40 hover:border-primary/50 hover:shadow-primary/10';
      case 'secondary':
        return 'border-secondary/20 bg-card/40 hover:border-secondary/50 hover:shadow-secondary/10';
      case 'accent':
        return 'border-accent/20 bg-card/40 hover:border-accent/50 hover:shadow-accent/10';
      default:
        return 'border-primary/20 bg-card/40 hover:border-primary/50';
    }
  };

  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">Technical Proficiency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leveraging a comprehensive stack of modern technologies to build robust, scalable solutions across platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`backdrop-blur-xl p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${getColorClasses(category.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-${category.color === 'primary' ? 'primary' : category.color === 'secondary' ? 'secondary' : 'accent'}`}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Skills;