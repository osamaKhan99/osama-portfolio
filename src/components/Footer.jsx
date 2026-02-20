import React from 'react';
import { Mail, MapPin, Heart } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import CopyText from './ui/copy';


const Footer = ({ personalInfo, socialLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contact' className="border-t border-gray-800 py-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 flex justify-between">
          <div className='flex flex-col md:flex-row justify-between gap-8 w-full'>
            <div>
              <h3 className="text-base md:text-xl font-bold text-white mb-6">Contact</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                  <div>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm md:text-lg hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <CopyText text={personalInfo.email} />
                </div>

                <div>
                  <div className="flex items-center gap-3 ml-1">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-sm font-medium text-green-500">
                      Available for remote or onsite roles and open to relocation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-base md:text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = LucideIcons[social.icon.charAt(0).toUpperCase() + social.icon.slice(1)] || Mail;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 border border-gray-800 p-2 md:p-4 rounded-lg hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
                      title={social.name}
                    >
                      <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold">{personalInfo.name}</span>
            </p>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
