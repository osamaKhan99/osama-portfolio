import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-gradient">
              Projects
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mb-4" />
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Showcasing my expertise in full-stack development and blockchain technology
          </p>
        </div>

        {/* Enhanced Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            // pagination={{
            //   clickable: true,
            //   dynamicBullets: true,
            // }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="projects-swiper pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="max-w-3xl">
                <div className="group relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/30 hover:-translate-y-2">
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  {/* Inner Container */}
                  <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden">
                    {/* Project Image with Parallax Effect */}
                    <div className="relative overflow-hidden h-72">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 mix-blend-overlay z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Animated Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                      
                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float" />
                        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float-delay-1" />
                        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-delay-2" />
                      </div>
                      
                      {/* Category Badge with Glow */}
                      <div className="absolute top-6 right-6 z-20">
                        <div className="relative">
                          <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-50 animate-pulse" />
                          <span className="relative px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full text-sm backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform duration-300">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Project Number Indicator */}
                      <div className="absolute top-6 left-6 z-20">
                        <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center">
                          <span className="text-cyan-400 font-bold text-lg">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info with Staggered Animation */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 flex-1">
                          {project.title}
                        </h3>
                        {/* <div className="ml-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                          <ArrowRight className="w-6 h-6 text-cyan-400" />
                        </div> */}
                      </div>
                      
                      <p className="text-gray-400 mb-6 line-clamp-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Technologies with Staggered Reveal */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 5).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-lg text-xs border border-gray-700 hover:border-cyan-400/50 hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                            style={{
                              animationDelay: `${techIndex * 100}ms`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-lg text-xs border border-cyan-400/30 font-semibold">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group/btn relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 blur transition-opacity duration-300" />
                          <div className="relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                            <ExternalLink size={18} className="animate-bounce-subtle" />
                            <span>Live Demo</span>
                          </div>
                        </a>
                        
                        {/* <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group/btn relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300" />
                          <div className="relative flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                            <Github size={18} />
                            <span>View Code</span>
                          </div>
                        </a> */}
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? 'w-12 bg-gradient-to-r from-cyan-400 to-purple-500'
                    : 'w-6 bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delay-1 {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }

        @keyframes float-delay-2 {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(5px);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float-delay-1 4s ease-in-out infinite;
        }

        .animate-float-delay-2 {
          animation: float-delay-2 5s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Custom Swiper Styles */
        .projects-swiper .swiper-slide {
          transition: all 0.5s ease;
        }

        .projects-swiper .swiper-slide-active {
          z-index: 10;
        }
        .projects-swiper .swiper-button-next,
.projects-swiper .swiper-button-prev {
  width: 40px;
  height: 40px;
}

.projects-swiper .swiper-button-next::after,
.projects-swiper .swiper-button-prev::after {
  font-size: 16px;
}


        .projects-swiper .swiper-button-next,
.projects-swiper .swiper-button-prev {
  background: linear-gradient(135deg,#22d3ee,#a855f7);
  color: black;
  border: none;
  box-shadow: 0 0 25px rgba(34,211,238,.7);
  padding: 8px;
}

.projects-swiper .swiper-button-next:hover,
.projects-swiper .swiper-button-prev:hover {
  box-shadow: 0 0 40px rgba(168,85,247,.9);
}


        .projects-swiper .swiper-pagination-bullet {
          background: #4b5563;
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }

        .projects-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default Projects;