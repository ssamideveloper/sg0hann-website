import React, { useRef, useEffect } from 'react';
import { Play, Code, ChevronRight } from 'lucide-react';

interface ServicesProps {
  addToCart: (service: {id: string, name: string, price: number}) => void;
}

const Services: React.FC<ServicesProps> = ({ addToCart }) => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6" ref={servicesRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Elevate your brand with our professional digital services tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Video Production Service */}
          <div className="service-card opacity-0 transition-all duration-700 transform translate-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Video Production"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                        <Play size={16} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Promotional Video Creation</h3>
                    </div>
                    <p className="text-sm text-gray-200">Starting at $35</p>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-grow">
                <div className="mb-4">
                  <h4 className="text-base font-semibold mb-2">What You'll Get</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>High-quality professional video production</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Promotional Videos/Stream on Youtube & Tiktok & Twitch </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Engaging storytelling that resonates with your audience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Professional editing with dynamic effects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Optimized for social media and marketing platforms</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-base font-semibold mb-2">Benefits</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Our promotional videos will significantly increase your brand visibility and engagement. With professional storytelling and high-quality production, you'll capture your audience's attention and drive conversions.
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => addToCart({id: 'video-production', name: 'Promotional Video Creation', price: 35})}
                  className="btn-primary w-full group text-sm py-2"
                >
                  Add to Cart
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Web Development Service */}
          <div className="service-card opacity-0 transition-all duration-700 transform translate-y-8 delay-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Web Development"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                        <Code size={16} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Website Development</h3>
                    </div>
                    <p className="text-sm text-gray-200">Starting at $25</p>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-grow">
                <div className="mb-4">
                  <h4 className="text-base font-semibold mb-2">What You'll Get</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Custom-designed, responsive website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Modern UI/UX with engaging animations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>SEO optimization for better visibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Fast loading speeds and performance</span>
                    </li>
                   
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-base font-semibold mb-2">Benefits</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    A professionally developed website establishes credibility and provides a seamless user experience. Our websites are built with conversion in mind, ensuring your visitors become customers through intuitive design and strategic calls-to-action.
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => addToCart({id: 'web-development', name: 'Website Development', price: 25})}
                  className="btn-primary w-full group text-sm py-2"
                >
                  Add to Cart
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
