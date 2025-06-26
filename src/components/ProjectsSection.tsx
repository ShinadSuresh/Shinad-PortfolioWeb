
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import kos from '../assets/koshamattam-landing.png';
import kitko from '../assets/Kitko-landing.png';
import fin from '../assets/FinBook-Gloabl-Laning.png';
import portfolio from '../assets/portfolioweb-landing.png';
import karreo from '../assets/karreo.img.png';
import plashoe from '../assets/PLASHOE E COMMERCE.png';


export const ProjectsSection = () => {
  const projects = [
    {
      title: "KITCO Platform",
      description: "Industrial equipment system with inventory tracking, maintenance scheduling, and reporting for manufacturers.",
      image: kitko,
      technologies: ["React", "Redux", "Express.js", "PostgreSQL", "Material-UI"],
      liveUrl: "https://kitkodm.netlify.app/",
      githubUrl: "#",
      category: "Industrial"
    },
    {
      title: "FinBook Global",
      description: "Global financial services platform offering multi-currency support, real-time market data, and advanced trading analytics with responsive design.",
      image: fin,
      technologies: ["React", "Next.js", "GraphQL", "PostgreSQL", "Chakra UI"],
      liveUrl: "https://finbookglobal.com/",
      githubUrl: "#",
      category: "Finance"
    },
    {
      title: "Kosamattam Finance",
      description: "A comprehensive financial management platform with modern UI/UX design, featuring loan management, customer portals, and real-time analytics dashboard.",
      image: kos,
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Fintech"
    },
    {
      title: "PLASHOE E-Commerce",
      description: "Modern admin dashboard for e-commerce management with sales analytics, inventory management, and customer relationship tools.",
      image: plashoe,
      technologies: ["React", "Chart.js", "Firebase", "Stripe API", "Bootstrap"],
      liveUrl: 'https://e-commerce-shinad.netlify.app/',
      githubUrl: "#",
      category: "E-commerce"
    },
    {
      title: "Karreo.com",
      description: "career development platform for students, offering a chatbot for guidance, a news section, and daily updates to help them grow and stay informed",
      image: karreo,
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Ant Design"],
      liveUrl: "https://karreo.netlify.app/",
      githubUrl: "#",
      category: "Productivity"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my work with modern animations, responsive design, and optimized performance.",
      image:  portfolio,
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Personal"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in UI/UX design and frontend development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden glass hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-space font-semibold mb-2 text-gradient">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                  </a>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
