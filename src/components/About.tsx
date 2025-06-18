
import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    { 
      icon: Target, 
      title: "Mission-Driven", 
      description: "We turn creative ideas into impactful digital solutions" 
    },
    { 
      icon: Users, 
      title: "Client-Focused", 
      description: "Building lasting partnerships with startups and creators" 
    },
    { 
      icon: Zap, 
      title: "Innovation First", 
      description: "Cutting-edge technology meets creative excellence" 
    },
    { 
      icon: Award, 
      title: "Quality Assured", 
      description: "Delivering exceptional results that exceed expectations" 
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#0772c8]">Neway Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Based in Chandigarh, India, we're a creative tech studio passionate about 
            transforming digital landscapes for businesses worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Neway Solutions is a forward-thinking digital agency that specializes in creating 
              powerful online experiences. We work closely with startups, personal brands, and 
              creators to bring their visions to life through innovative technology and design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is simple: to turn your ideas into impactful digital solutions that 
              drive growth, engagement, and success. We believe in the power of collaboration 
              and work as an extension of your team to achieve extraordinary results.
            </p>
            <div className="bg-gradient-to-r from-[#0772c8] to-[#04a1d6] p-6 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-2">Why Brands Choose Us</h4>
              <p>We combine technical expertise with creative vision to deliver solutions that 
              not only look great but perform exceptionally and drive real business results.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#0772c8] to-[#04a1d6] rounded-2xl p-1">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0772c8] to-[#04a1d6] rounded-full flex items-center justify-center mx-auto mb-4">
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
