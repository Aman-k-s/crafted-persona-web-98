
import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    { 
      icon: Target, 
      title: "Mission-Driven", 
      description: "We turn creative ideas into impactful digital solutions",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Users, 
      title: "Client-Focused", 
      description: "Building lasting partnerships with startups and creators",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Zap, 
      title: "Innovation First", 
      description: "Cutting-edge technology meets creative excellence",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Award, 
      title: "Quality Assured", 
      description: "Delivering exceptional results that exceed expectations",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-sky-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 mb-6">
            About Us
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-[#0772c8] to-[#04a1d6] bg-clip-text text-transparent">Neway Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Based in Chandigarh, India, we're a creative tech studio passionate about 
            transforming digital landscapes for businesses worldwide.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-slate-900">Who We Are</h3>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Neway Solutions is a forward-thinking digital agency that specializes in creating 
                powerful online experiences. We work closely with startups, personal brands, and 
                creators to bring their visions to life through innovative technology and design.
              </p>
              <p>
                Our mission is simple: to turn your ideas into impactful digital solutions that 
                drive growth, engagement, and success. We believe in the power of collaboration 
                and work as an extension of your team to achieve extraordinary results.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0772c8] to-[#04a1d6] p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h4 className="text-2xl font-semibold mb-3 relative z-10">Why Brands Choose Us</h4>
              <p className="relative z-10 opacity-90 leading-relaxed">We combine technical expertise with creative vision to deliver solutions that 
              not only look great but perform exceptionally and drive real business results.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#0772c8] to-[#04a1d6] rounded-3xl p-2 shadow-2xl shadow-blue-500/20">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg shadow-orange-500/25"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg shadow-green-500/25"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/20 transition-all duration-500 hover:-translate-y-2 border border-slate-100">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
