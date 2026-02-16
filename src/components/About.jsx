import React from 'react';
import { Code2, Blocks, Rocket, DollarSign } from 'lucide-react';

const About = ({ about, personalInfo }) => {
  const stats = [
    { icon: Code2, label: 'Experience', value: personalInfo.experience },
    { icon: Blocks, label: 'Projects Completed', value: '50+' },
    { icon: Rocket, label: 'User Impacted', value: '100K+' },
    {icon: DollarSign, label: "Revenue Generated", value: "300M+"}
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About   <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Avatar */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-gray-900 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {about.description}
            </p>

            <div className="space-y-3">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-400">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-105"
              >
                <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
