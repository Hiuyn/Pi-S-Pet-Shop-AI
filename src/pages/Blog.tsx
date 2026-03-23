import React, { useState, useMemo } from 'react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../constants';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả danh mục');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === 'Tất cả danh mục' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Tin tức & Cẩm nang</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Chia sẻ kinh nghiệm chăm sóc, huấn luyện và những câu chuyện thú vị về thế giới thú cưng.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => setSelectedCategory('Tất cả danh mục')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                selectedCategory === 'Tất cả danh mục'
                  ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/30'
                  : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              Tất cả
            </button>
            {BLOG_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/30'
                    : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-primary-blue shadow-sm"
            />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] overflow-hidden pink-shadow group flex flex-col h-full"
              >
                <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-150 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-primary-blue shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-500 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto text-primary-blue font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Đọc tiếp <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">Không tìm thấy bài viết nào phù hợp.</p>
          </div>
        )}
      </div>
    </div>
  );
};
