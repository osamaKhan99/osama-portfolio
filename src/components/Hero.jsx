import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Spotlight } from './ui/spotlight-new';
import { cn } from '../lib/utils';

const Hero = ({ personalInfo }) => {


  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
       <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )} />
      <Spotlight  />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 px-4 max-w-6xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h4 className="text-lg md:text-2xl font-bold text-white mb-2">Hi! I'm <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-gradient font-semibold'>Osama Waseem</span></h4>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-4">
          {personalInfo.baseContent}
          </h1>

          <div>
          <p className="text-lg md:text-2xl font-bold text-gray-400 max-w-4xl mx-auto">
            
          </p>
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl">
            {personalInfo.subContent}
          </p>
          </div>
        

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-black rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
      >
        <ChevronDown className="text-cyan-400" size={32} />
      </button>
    </section>
  );
};

export default Hero;
