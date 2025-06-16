import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import YONOSBI from '../assets/Yono-colone-design.jpg';
import trifold from "../assets/Why Karreo Brochure.png";
import koshmattm from "../assets/Koshamattam-Thumbnail.png";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export const DesignProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const designProjectsRef = useRef<HTMLDivElement>(null);

  const designProjects = [
    {
      title: "YONO SBI Mobile App",
      description: "Modern mobile app design for online shopping with intuitive user flow and seamless checkout experience.",
      image: YONOSBI,
      tools: ["Figma", "Adobe XD", "Photoshop"],
      category: "Mobile Design",
      designUrl: "https://www.figma.com/proto/L5IFmD7HAcBJ5Fv350mJOq/Yono-sbi-clone?node-id=10-2&t=6bp1UEd70rYze8PZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
    },
    {
      title: "Tri-Fold Brochure Career Guidance",
      description: "Clean and professional dashboard design for banking services with data visualization and user-friendly interface.",
      image: trifold,
      tools: ["Figma", "Illustrator", "Canva"],
      category: "Brocure Design",
      designUrl: "https://www.canva.com/design/DAGpFfuD100/YthemaXPb6N5RJ1ZLGXgLw/view?utm_content=DAGpFfuD100&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h387eef4345"
    },
    {
      title: "Digital Financial Experience",
      description: "A modern, clean, and engaging UI/UX design for Kosamattam Finance—crafted to communicate reliability, security, and family-focused financial support. From banners to the full website experience, every element is designed to reflect a trusted financial partner that puts people first.",
      image: koshmattm,
      tools: ["Figma", "Adobe XD", "Canva"],
      category: "Mobile Design",
      designUrl: "https://www.figma.com/proto/Ba7hu0gbNP5HoL9wSLiiPb/Koshamattam-finance?node-id=450-1685&t=gm7GQXJOFwp3whT5-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=461%3A3400"
    },
  ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Title animation
//       gsap.fromTo(titleRef.current, {
//         opacity: 0,
//         y: 50
//       }, {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse"
//         }
//       });

//       // Design projects animation
//       if (designProjectsRef.current) {
//         const projectCards = designProjectsRef.current.children;
//         gsap.fromTo(projectCards, {
//           opacity: 0,
//           y: 60,
//           scale: 0.8
//         }, {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           ease: "power3.out",
//           stagger: 0.15,
//           scrollTrigger: {
//             trigger: designProjectsRef.current,
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//           }
//         });

//         // Hover animations for each design card
//         Array.from(projectCards).forEach((card) => {
//           const cardElement = card as HTMLElement;
          
//           cardElement.addEventListener('mouseenter', () => {
//             gsap.to(cardElement, {
//               y: -10,
//               rotationY: 5,
//               scale: 1.03,
//               duration: 0.4,
//               ease: "power2.out"
//             });
//           });

//           cardElement.addEventListener('mouseleave', () => {
//             gsap.to(cardElement, {
//               y: 0,
//               rotationY: 0,
//               scale: 1,
//               duration: 0.4,
//               ease: "power2.out"
//             });
//           });
//         });
//       }

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

  return (
    <section ref={sectionRef} id="design-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Design <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore my UI/UX design projects showcasing user-centered design principles and modern aesthetics
          </p>
        </div>

        <div ref={designProjectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden glass hover:shadow-2xl transition-all duration-500 border-0">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-66 object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href={project.designUrl} target="_blank" rel="noopener noreferrer" >
                  <Button className="primary-gradient hover:scale-110 transition-transform">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Design
                  </Button>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <h3 className="text-xl font-space font-semibold mb-3 text-gradient">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs border-brand-500/30 text-brand-600 dark:text-brand-400">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};