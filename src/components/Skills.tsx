import { Code, Database, Globe, Smartphone, GitBranch, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "React Native", "Redux Toolkit", "Zustand", "Expo"],
      color: "primary"
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "Supabase", "Appwrite"],
      color: "secondary"
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Expo", "Navigation", "State Management"],
      color: "accent"
    },
    {
      title: "Tools & DevOps",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["GitHub Workflows", "REST APIs", "CI/CD", "Version Control"],
      color: "primary"
    },
    {
      title: "Specialties",
      icon: <Zap className="w-6 h-6" />,
      skills: ["App Design", "Custom Integration", "Problem Solving", "Team Leadership"],
      color: "secondary"
    },
    {
      title: "Problem Solving",
      icon: <Code className="w-6 h-6" />,
      skills: ["150+ LeetCode", "Algorithms", "Data Structures", "System Design"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 hover:border-primary/60 hover:shadow-primary';
      case 'secondary':
        return 'border-secondary/30 hover:border-secondary/60 hover:shadow-glow';
      case 'accent':
        return 'border-accent/30 hover:border-accent/60 hover:shadow-card';
      default:
        return 'border-primary/30 hover:border-primary/60';
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies for building scalable web and mobile applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-gradient-card p-6 rounded-xl border transition-smooth hover:scale-105 ${getColorClasses(category.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color}/20`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="hover:text-foreground transition-smooth">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "React", "Node.js", "MongoDB", "Firebase", "React Native", 
              "Express", "Redux", "GitHub", "TypeScript", "JavaScript"
            ].map((tech, index) => (
              <div
                key={tech}
                className="bg-card/50 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-medium hover:bg-card transition-smooth hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;