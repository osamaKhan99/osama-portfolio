import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Education = ({ certifications, education }) => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education &   <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-cyan-400 text-sm font-medium whitespace-nowrap ml-4">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="grid gap-6">
              {certifications.map((cert) => {
                const IconComponent = LucideIcons[cert.icon.split('-').map((word, index) => 
                  index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join('')] || Award;
                
                return (
                  <div
                    key={cert.id}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-400 to-cyan-400 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                        <span className="text-cyan-400 text-xs font-medium">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
