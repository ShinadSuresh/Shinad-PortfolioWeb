
import { Card } from "@/components/ui/card";
import profileImg from '../assets/shinad-portrait.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate UI Developer and UI/UX Designer with a keen eye for creating 
                exceptional digital experiences. With expertise in modern frontend technologies 
                and design principles, I bridge the gap between design and development.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Currently working at Black Badger Innovation Pvt. Ltd. and Aabasoft Technologies, 
                I specialize in React development, responsive design, and creating intuitive user interfaces 
                that deliver both aesthetic appeal and functional excellence.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or mentoring fellow developers in the community.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="p-8 glass transform hover:scale-105 transition-all duration-300">
               <img 
                src={profileImg} 
                alt="Card image" 
                className="w-full  rounded-lg filter brightness-15 contrast-45 mb-4" 
              />
            </Card> 
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 glass text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">2+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </Card>
          
          <Card className="p-6 glass text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </Card>
          
          <Card className="p-6 glass text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400">Companies Worked</div>
          </Card>
        </div>
      </div>
    </section>
  );
};
