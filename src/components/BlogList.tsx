import React from 'react';
import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogList = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Góc chia sẻ</h2>
          <Link to="/blog" className="text-primary-blue font-semibold hover:underline flex items-center gap-1">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden group border border-slate-100 h-full"
            >
              <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-150 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold text-primary-blue shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto text-primary-blue font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Đọc thêm <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
