
import React from 'react';
import { Code, Palette, Search, Megaphone, Smartphone, MoreHorizontal } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Full-stack Solutions", "E-commerce Platforms", "API Integration"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Optimize your digital presence with technical SEO, speed optimization, and performance enhancement.",
      features: ["Technical SEO", "Speed Optimization", "Analytics Setup", "Performance Monitoring"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Megaphone,
      title: "Branding & Visual Identity",
      description: "Comprehensive brand development from logo design to complete visual identity systems.",
      features: ["Logo Design", "Brand Guidelines", "Visual Assets", "Brand Strategy"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Content & Social Media",
      description: "Strategic content creation and social media management to build your online presence.",
      features: ["Content Strategy", "Social Media Management", "Visual Content", "Engagement Growth"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: MoreHorizontal,
      title: "And Many More...",
      description: "We offer a comprehensive range of digital services tailored to your specific business needs.",
      features: ["Digital Marketing", "Consultation", "Maintenance", "Custom Solutions"],
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-sky-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 mb-6">
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            What We <span className="bg-gradient-to-r from-[#0772c8] to-[#04a1d6] bg-clip-text text-transparent">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand and drive growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/20 transition-all duration-500 hover:-translate-y-3 border border-slate-100 relative overflow-hidden">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
