import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-slate-500">Sự hài lòng của bạn là niềm hạnh phúc của Pi Sà Pet Shop</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-secondary-pink/20" size={48} />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 italic mb-6">"{item.comment}"</p>
              
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-primary-blue/20"
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-slate-800">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
