
import React from 'react';
import { Instagram, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceLinks = [
    'Web Development',
    'UI/UX Design',
    'SEO & Performance',
    'Branding & Identity',
    'Content Strategy',
    'Digital Marketing'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-sky-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-pink-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Neway<span className="bg-gradient-to-r from-[#04a1d6] to-[#0891b2] bg-clip-text text-transparent">Solutions</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Turning ideas into impact through innovative digital solutions. 
                Based in Chandigarh, serving clients worldwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-slate-400 hover:text-[#04a1d6] transition-colors duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-sky-600/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-[#04a1d6]" />
                </div>
                <span>newaysolutions.in@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-400 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <span>Chandigarh, India</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-slate-400 hover:text-[#04a1d6] transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-[#04a1d6] transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="space-y-6">
              <a 
                href="https://instagram.com/neway_solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-[#04a1d6] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </div>
                @neway_solutions
              </a>
              
              <div className="bg-gradient-to-br from-[#0772c8] to-[#04a1d6] p-6 rounded-2xl relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h5 className="font-semibold mb-2 text-white">Ready to Start?</h5>
                  <p className="text-sm mb-4 text-white/80">Let's discuss your next project</p>
                  <a 
                    href="#contact" 
                    className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Neway Solutions. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-12 h-12 bg-gradient-to-br from-[#0772c8] to-[#04a1d6] rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
