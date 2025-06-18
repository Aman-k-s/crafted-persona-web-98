
import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-sky-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-sky-400/10 to-blue-400/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-8 shadow-lg shadow-blue-500/10">
            <Sparkles className="w-4 h-4 mr-2" />
            Digital Innovation Studio
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-tight">
            Turning Ideas into
            <span className="block bg-gradient-to-r from-[#0772c8] via-[#04a1d6] to-[#0891b2] bg-clip-text text-transparent">
              Impact
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We're a digital services and creative tech studio that transforms your vision into 
            powerful digital experiences that drive growth and engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="#services" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 font-medium text-lg"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="#contact" 
              className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 rounded-full hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-500 font-medium text-lg"
            >
              Get in Touch
              <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "25+", label: "Happy Clients" },
              { number: "3+", label: "Years Experience" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0772c8] to-[#04a1d6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
