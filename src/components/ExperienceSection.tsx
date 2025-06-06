
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Black Badger Innovation Pvt. Ltd.",
      position: "UI Developer",
      duration: "April 2023 – Present",
      description: "Leading frontend development projects, creating responsive web applications using React and modern JavaScript frameworks. Collaborating with design teams to implement pixel-perfect UI components.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux", "Figma"],
      type: "Full-time"
    },
    {
      company: "Aabasoft Technologies",
      position: "UI/UX Designer & Developer",
      duration: "Dec 2023 – Feb 2025",
      description: "Designed and developed user interfaces for web applications, conducted user research, and created wireframes and prototypes. Implemented responsive designs with focus on user experience.",
      technologies: ["React", "SCSS", "Adobe XD", "Figma", "JavaScript", "Bootstrap"],
      type: "Contract"
    },
    {
      company: "Bridgeon Solutions LLP",
      position: "Junior Developer & Intern",
      duration: "2022 – 2023",
      description: "Started as an intern and progressed to junior developer role. Gained hands-on experience in web development, learned modern frameworks, and contributed to various client projects.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "VS Code"],
      type: "Internship → Full-time"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10" />
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <Card className="p-6 glass transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs font-medium">
                        {exp.type}
                      </Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-space font-semibold mb-2 text-gradient">
                      {exp.position}
                    </h3>
                    
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
