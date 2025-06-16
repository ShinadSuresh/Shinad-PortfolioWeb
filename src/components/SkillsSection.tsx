
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "React", "Redux",],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Styling & Frameworks",
      icon: "🎨",
      skills: ["Tailwind CSS", "Bootstrap", "Material-UI", "Ant Design", "CSS Grid", "Flexbox"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Design Tools",
      icon: "✨",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools I use to create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 glass transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{category.icon}</div>
                <h3 className="text-lg font-space font-semibold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
              </div>
              
              <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">75%</div>
            <div className="text-gray-600 dark:text-gray-400">Frontend Development</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{width: '75%'}} />
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">60%</div>
            <div className="text-gray-600 dark:text-gray-400">UI/UX Design</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '60%'}} />
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">70%</div>
            <div className="text-gray-600 dark:text-gray-400">React Development</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full" style={{width: '70%'}} />
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">30%</div>
            <div className="text-gray-600 dark:text-gray-400">Backend Integration</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 h-2 rounded-full" style={{width: '30%'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
