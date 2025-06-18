
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Coming Soon",
      role: "Client Testimonial",
      company: "Placeholder",
      content: "We're working with amazing clients and will feature their testimonials here soon. Stay tuned for real feedback from our satisfied customers.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Your Review Here",
      role: "Future Client",
      company: "Your Company",
      content: "Ready to share your experience working with Neway Solutions? We'd love to feature your success story and showcase the impact of our collaboration.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="text-[#0772c8]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What our clients say about working with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-[#04a1d6] mr-4" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to join our satisfied clients?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0772c8] to-[#04a1d6] text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
