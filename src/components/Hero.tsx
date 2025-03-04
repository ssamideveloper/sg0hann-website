import React, { useEffect, useRef } from 'react';
import { ChevronRight, Youtube, Twitch, BookIcon as TiktokIcon, Disc as Discord } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;

      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20 animate-blob"
          style={{ transform: 'translate(calc(var(--move-x, 0) * -0.5), calc(var(--move-y, 0) * -0.5))' }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-20 animate-blob animation-delay-2000"
          style={{ transform: 'translate(calc(var(--move-x, 0) * 0.5), calc(var(--move-y, 0) * 0.5))' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600 rounded-full filter blur-[100px] opacity-20 animate-blob animation-delay-4000"
          style={{ transform: 'translate(calc(var(--move-x, 0) * 0.3), calc(var(--move-y, 0) * -0.3))' }}
        ></div>

        {/* Social Media Icons */}
        <div className="absolute top-[15%] left-[20%] animate-float animation-delay-1000">
          <Youtube size={40} className="text-red-500 opacity-30" />
        </div>
        <div className="absolute top-[25%] right-[15%] animate-float animation-delay-2000">
          <Twitch size={40} className="text-purple-500 opacity-30" />
        </div>
        <div className="absolute bottom-[30%] left-[25%] animate-float animation-delay-3000">
          <TiktokIcon size={40} className="text-gray-500 opacity-30" />
        </div>
        <div className="absolute bottom-[20%] right-[25%] animate-float animation-delay-4000">
          <Discord size={40} className="text-blue-500 opacity-30" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
              Premium Digital Services
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Grow Your Online Presence With</span>
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              sg0hann
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Elevate your online presence with our premium video production and web development services designed to captivate your audience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="btn-primary group"
            >
              Explore Services
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
