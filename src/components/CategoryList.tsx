import React from 'react';
import { PRODUCT_CATEGORIES } from '../constants';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const CategoryList = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Danh mục sản phẩm</h2>
          <Link to="/products" className="text-primary-blue font-semibold hover:underline">Xem tất cả</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PRODUCT_CATEGORIES.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-pink/30 p-8 rounded-[32px] flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform group h-full"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <span className="font-bold text-slate-800 text-lg">{cat.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
