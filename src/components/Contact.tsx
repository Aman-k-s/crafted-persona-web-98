
import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-sky-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 mb-6">
            Contact Us
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Get in <span className="bg-gradient-to-r from-[#0772c8] to-[#04a1d6] bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your ideas into impact? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Let's Start a Conversation</h3>
              <p className="text-slate-700 mb-8 text-lg leading-relaxed">
                We're here to help bring your vision to life. Whether you're a startup looking to establish 
                your digital presence or an established brand ready for a refresh, we're excited to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "newaysolutions.in@gmail.com", gradient: "from-blue-500 to-cyan-500" },
                { icon: MapPin, title: "Location", info: "Chandigarh, India", gradient: "from-green-500 to-emerald-500" },
                { icon: MessageCircle, title: "WhatsApp", info: "Quick response via WhatsApp", gradient: "from-purple-500 to-pink-500" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <contact.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">{contact.title}</h4>
                    <p className="text-slate-600">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-[#0772c8] to-[#04a1d6] p-8 rounded-3xl text-white relative overflow-hidden shadow-2xl shadow-blue-500/25">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-3">Ready to Get Started?</h4>
                <p className="mb-6 opacity-90 leading-relaxed">Contact us via WhatsApp for immediate response and quick project discussion.</p>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl hover:bg-white/30 transition-all duration-300 font-medium flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-sky-50 rounded-full blur-2xl -z-10"></div>
            
            <h3 className="text-3xl font-bold text-slate-900 mb-8 relative z-10">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-slate-50/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-slate-50/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-slate-50/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#0772c8] to-[#04a1d6] text-white py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 font-semibold text-lg flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
