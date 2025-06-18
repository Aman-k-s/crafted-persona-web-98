import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const featuredProject = {
    title: "SignPresenter",
    description: "A comprehensive digital signage solution that enables businesses to create, manage, and display dynamic content across multiple screens. Built with modern web technologies for seamless performance.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
    features: ["Real-time Content Management", "Multi-screen Support", "Analytics Dashboard", "Cloud-based Solution"]
  };

  const otherProjects = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Stripe", "Node.js"]
    },
    {
      title: "Brand Identity System",
      description: "Complete visual identity for tech startup",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      tech: ["Branding", "UI/UX", "Design"]
    },
    {
      title: "Mobile App Design",
      description: "User-friendly mobile application interface",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      tech: ["UI/UX", "Mobile", "Figma"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#0772c8]">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest projects and creative solutions
          </p>
        </div>
        
        {/* Featured Project */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#0772c8] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured Project
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">{featuredProject.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{featuredProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {featuredProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#04a1d6] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {featuredProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white border border-[#0772c8] text-[#0772c8] rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="inline-flex items-center px-6 py-3 bg-[#0772c8] text-white rounded-lg hover:bg-[#0561a0] transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border border-[#0772c8] text-[#0772c8] rounded-lg hover:bg-[#0772c8] hover:text-white transition-colors duration-200">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {otherProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-100 text-[#0772c8] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
