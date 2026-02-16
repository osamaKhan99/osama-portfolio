import React from 'react';
import { Mail, MapPin, Send, Heart } from 'lucide-react';
import * as LucideIcons from 'lucide-react';


const Footer = ({ personalInfo, socialLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contact' className="border-t border-gray-800 py-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 flex justify-between">
            <div className='flex justify-between w-full'>
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="bg-cyan-400 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-lg hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="bg-purple-400 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = LucideIcons[social.icon.charAt(0).toUpperCase() + social.icon.slice(1)] || Mail;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 border border-gray-800 p-4 rounded-lg hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
                      title={social.name}
                    >
                      <IconComponent className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
            </div>

            {/* CTA Box */}
            {/* <div className="bg-gradient-to-br from-cyan-400 to-purple-400 rounded-2xl p-8 text-black">
              <h4 className="text-2xl font-bold mb-3">Ready to Start?</h4>
              <p className="mb-6">Let's discuss your project and see how I can help bring your vision to reality.</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                Send Email
              </a>
            </div> */}
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
