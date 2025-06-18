
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-sky-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Turning Ideas into
            <span className="block bg-gradient-to-r from-[#0772c8] to-[#04a1d6] bg-clip-text text-transparent">
              Impact
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're a digital services and creative tech studio that transforms your vision into 
            powerful digital experiences that drive growth and engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#services" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-[#0772c8] text-[#0772c8] rounded-full hover:bg-[#0772c8] hover:text-white transition-all duration-300 font-semibold"
            >
              Get in Touch
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0772c8]">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0772c8]">25+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0772c8]">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0772c8]">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
