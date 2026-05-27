import { motion } from "motion/react";
import { ExternalLink, Github, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Astraleon Tech official website",
      description:
        "A modern website for Astraleon Tech, focused on developing and selling websites. Built with React, TypeScript, Tailwind CSS, and integrated with EmailJS for contact and inquiries.",
      image: "/assets/astraleon.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "EmailJS"],
      featured: true,
      github: "#",
      demo: "https://astraleon-tech.netlify.app/",
    },
    {
      title: "BISD International official website",
      description:
        "A modern website for a BIM solutions provider, built with React and Vite. Features dedicated pages for civil, mechanical, and BIM solutions, showcasing the company’s expertise in commercial, industrial, and infrastructure projects.",
      image: "/assets/bisd.png",
      tags: [
        "React",
        "Vite",
        "TypeScript",
        "Radix UI",
        "Tailwind CSS",
        "Lucide React",
        "Recharts",
      ],
      featured: true,
      github: "#",
      demo: "https://fluffy-crepe-7ad26f.netlify.app/",
    },
    {
      title: "My SLT Web Portal",
      description:
        "Customer self-service portal for Sri Lanka Telecom with account management, bill payments, and service requests functionality.",
      image: "/assets/slt.png",
      tags: ["React", "TypeScript", "REST API", "Responsive Design"],
      featured: true,
      github: "#",
      demo: "https://mysltweb.vercel.app",
    },
    {
      title: "Lakmal Products Jaggery Website",
      description:
        "A modern, responsive website for Lakmal Products, showcasing traditional jaggery products, company story, and online inquiries.",
      image: "/assets/jaggery.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Company Website"],
      featured: true,
      github: "#",
      demo: "https://deep-mark-431207-b8.web.app/",
    },
    {
      title: "Hyperdim Innovation Official Website",
      description:
        "Modern corporate website featuring AI-powered chatbot integration, responsive design, and dynamic content management for enhanced user engagement.",
      image: "/assets/hyperdim.png",
      tags: ["React", "TypeScript", "AI Integration", "Tailwind CSS"],
      featured: true,
      github: "#",
      demo: "https://www.hyperdim-innovation.com/",
    },

    {
      title: "Velora Elder Care Official Website",
      description:
        "A luxury-level eldercare website for Velora, designed to showcase premium services, facilities, and care options for seniors. Built with TypeScript and Tailwind CSS for a modern, elegant user experience.",
      image: "/assets/velora.png",
      tags: ["TypeScript", "Tailwind CSS", "Luxury Eldercare"],
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      title: "e-Kitchen E-commerce Platform",
      description:
        "Full-featured online food ordering and kitchen equipment marketplace with shopping cart, secure checkout, and order tracking.",
      image:
        "https://images.unsplash.com/photo-1708915965975-2a950db0e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmb29kJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjE1NDkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "TypeScript", "Tailwind CSS", "E-commerce"],
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      title: "e-Kitchen Admin Panel",
      description:
        "Admin dashboard for managing products, orders, users, and analytics for the e-Kitchen platform. Includes secure authentication and real-time updates.",
      image: "/assets/e admin.jpeg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Admin Dashboard"],
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      title: "Tourists Transport Management System",
      description:
        "Comprehensive travel booking platform with destination browsing, itinerary planning, and booking management capabilities.",
      image: "/assets/transport.png",
      tags: ["React", "Python", "Django", "MySQL"],
      featured: false,
      github: "#",
      demo: "#",
    },
  ];

  const mobileDesigns = [
    "Hotel Management System",
    "Mini Supermarket Management System",
    "FitPulse Mobile Application",
    "FitWave Fitness Mobile Application",
    "Health Care Mobile Application",
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of recent work demonstrating technical expertise and
              creative problem-solving
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={project.featured ? "lg:col-span-1" : "lg:col-span-1"}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col group hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </div>
                    )}
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-gray-700 text-blue-400 border border-gray-600 hover:bg-blue-500/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {project.title === "Velora Elder Care Official Website" ||
                  project.title === "e-Kitchen E-commerce Platform" ||
                  project.title === "e-Kitchen Admin Panel" ||
                  project.title === "Tourists Transport Management System" ? (
                    <CardFooter className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-gray-600 to-purple-600 text-white"
                        disabled
                      >
                        In Progress
                      </Button>
                    </CardFooter>
                  ) : (
                    <CardFooter className="flex gap-2">
                      {/* Code button removed as requested */}
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2" size={16} />
                          Demo
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile App Designs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-white mb-6 text-center">
              Mobile and Web Designs (Figma)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {mobileDesigns.map((design, index) => (
                <motion.div
                  key={design}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-gray-300 text-sm group-hover:text-purple-400 transition-colors">
                    {design}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
