
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "AI Dashboard",
      description: "An analytics dashboard with AI-powered insights, data visualization, and predictive analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "FastAPI", "React", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["React Native", "Express.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "A modern social media platform with real-time messaging, media sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Socket.io", "Redis", "AWS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, and interactive learning modules for online education.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["Django", "React", "PostgreSQL", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating impactful solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.githubUrl} 
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
