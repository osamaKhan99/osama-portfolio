import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Contact = ({ personalInfo, socialLinks }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! This is a demo - form submission is not actually connected.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
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
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
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

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-cyan-400 to-purple-400 rounded-2xl p-8 text-black">
              <h4 className="text-2xl font-bold mb-3">Ready to Start?</h4>
              <p className="mb-6">Let's discuss your project and see how I can help bring your vision to reality.</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                Send Email
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
