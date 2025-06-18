
import React from 'react';
import { Code, Palette, Search, Megaphone, Smartphone, MoreHorizontal } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Full-stack Solutions", "E-commerce Platforms", "API Integration"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Optimize your digital presence with technical SEO, speed optimization, and performance enhancement.",
      features: ["Technical SEO", "Speed Optimization", "Analytics Setup", "Performance Monitoring"]
    },
    {
      icon: Megaphone,
      title: "Branding & Visual Identity",
      description: "Comprehensive brand development from logo design to complete visual identity systems.",
      features: ["Logo Design", "Brand Guidelines", "Visual Assets", "Brand Strategy"]
    },
    {
      icon: Smartphone,
      title: "Content & Social Media",
      description: "Strategic content creation and social media management to build your online presence.",
      features: ["Content Strategy", "Social Media Management", "Visual Content", "Engagement Growth"]
    },
    {
      icon: MoreHorizontal,
      title: "And Many More...",
      description: "We offer a comprehensive range of digital services tailored to your specific business needs.",
      features: ["Digital Marketing", "Consultation", "Maintenance", "Custom Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#0772c8]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0772c8] to-[#04a1d6] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-[#04a1d6] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
