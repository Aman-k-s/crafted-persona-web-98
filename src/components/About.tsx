
import React from 'react';
import { Code, Coffee, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable, scalable solutions" },
    { icon: Lightbulb, title: "Innovation", description: "Always exploring new technologies" },
    { icon: Zap, title: "Performance", description: "Optimized for speed and efficiency" },
    { icon: Coffee, title: "Dedication", description: "Passionate about every project" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm a passionate full-stack developer with over 5 years of experience 
              creating digital solutions that matter. I specialize in modern web technologies 
              and love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying ahead of the curve.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-600 rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
