import React from 'react';
import { Code, Server, Blocks, Wrench, FileCode2 } from 'lucide-react';

const Skills = ({ skills }) => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: skills.frontend,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: skills.backend,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Web3 & Blockchain',
      icon: Blocks,
      skills: skills.web3,
      color: 'from-green-400 to-cyan-500'
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-orange-400 to-red-500'
    }
  ];

  const checkImageExists = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };
  
  
  

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and blockchain solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((s, skillIndex) => {
                    const skill = s === "Material UI" ? "MUI" : s.includes("Solana") ? "Solana" : s.includes("EVM") ? "Ethereum" : s.includes("JavaScript") ? "JavaScript" : s
                    let url = true
                    checkImageExists(`https://cdn.simpleicons.org/${skill}`).then((exists) => {
                      if (exists) {
                        url = true
                      } else { 
                        url = false
                      }
                    });
                    return (
                      <>
                       <span
                         key={skillIndex}
                         className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-200 cursor-default"
                       >
                      {url ? <img key={skill} src={`https://cdn.simpleicons.org/${skill}`} className='w-5 h-5' /> : <FileCode2 className='w-5 h-5 text-cyan-400' />}
                         {skill}
                       </span>
                      </>
                     )
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
