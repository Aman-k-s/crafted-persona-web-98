
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Neway<span className="text-[#04a1d6]">Solutions</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Turning ideas into impact through innovative digital solutions. 
                Based in Chandigarh, serving clients worldwide.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-[#04a1d6]" />
                <span>newaysolutions.in@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-[#04a1d6]" />
                <span>Chandigarh, India</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-[#04a1d6] transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#04a1d6] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <a 
                href="https://instagram.com/neway_solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-[#04a1d6] transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 mr-3" />
                @neway_solutions
              </a>
              
              <div className="bg-gradient-to-r from-[#0772c8] to-[#04a1d6] p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Ready to Start?</h5>
                <p className="text-sm mb-3">Let's discuss your next project</p>
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-[#0772c8] px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Neway Solutions. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
