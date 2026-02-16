import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = ({ blogPosts }) => {
  return (
    <section id="blog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-cyan-400">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights on Web3, blockchain development, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
