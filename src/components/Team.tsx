import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter } from "lucide-react";
import falakImg from "@/assets/falak.png";
import yaqoobImg from "@/assets/yaqoob.jpeg";
import awaisImg from "@/assets/awais.jpeg";
import talhaImg from "@/assets/Talha.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "Falak Sher",
      position: "Full Stack Engineer",
      image: falakImg,
      skills: ["React Native", "Flutter", "React.js", "Next.js", "TypeScript", "Node.js", "Django"],
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      imagePosition: "object-top"
    },
    {
      name: "Yaqoob",
      position: "Team Lead & DevOps Engineer",
      image: yaqoobImg,
      skills: ["React Native", "Flutter", "React.js", "Next.js", "TypeScript", "Node.js", "Django"],
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      imagePosition: "object-center"
    },
    {
      name: "Awais",
      position: "Full Stack Mobile App Developer",
      image: awaisImg,
      skills: ["React Native", "Flutter", "React.js", "Next.js", "TypeScript", "Node.js", "Django"],
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      imagePosition: "object-top"
    },
    {
      name: "Talha Irfan",
      position: "Team Lead & Full Stack Web Developer",
      image: talhaImg,
      skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Django"],
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      imagePosition: "object-top"
    }
  ];

  return (
    <section id="team" className="py-20 px-6 relative overflow-hidden w-full max-w-[100vw]">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">Meet Our Team</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            The talented individuals driving innovation and excellence in every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative mb-6 mx-auto w-40 h-40 md:w-48 md:h-48 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className={`relative w-full h-full object-cover ${member.imagePosition} rounded-full border-4 border-card/50 group-hover:border-transparent transition-colors duration-300`}
                />
              </div>

              {/* Info */}
              <div className="text-center mb-6 grow">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.position}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {member.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
