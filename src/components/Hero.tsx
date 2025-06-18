
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in animation-delay-500">
          Full Stack Developer & Creative Problem Solver
        </p>
        <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
          I craft digital experiences that blend innovative design with robust functionality. 
          Passionate about creating solutions that make a difference.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-1500">
          <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <a 
          href="#about" 
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-2000"
        >
          Explore My Work
          <ArrowDown className="ml-2 w-4 h-4" />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
