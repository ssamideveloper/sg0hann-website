import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      testimonialCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "The promotional video created for our product launch exceeded all expectations. The quality and creativity brought our brand story to life in ways we couldn't have imagined. Our engagement metrics have increased by 300% since the launch!",
      rating: 5,
      service: "Video Production"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "Innovate Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "Our new website has completely transformed our online presence. The modern design, intuitive navigation, and lightning-fast performance have significantly improved our conversion rates. It's not just a website—it's a powerful business tool.",
      rating: 5,
      service: "Web Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Artisan Brands",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "The attention to detail in our promotional video was remarkable. Every frame captured our brand essence perfectly. We've received countless compliments from clients and partners about the professional quality.",
      rating: 5,
      service: "Video Production"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6" ref={testimonialsRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the clients who've experienced the transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card opacity-0 transition-all duration-700 transform translate-y-8 delay-${index * 200}`}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;