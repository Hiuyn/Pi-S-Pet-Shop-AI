import React from 'react';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Product } from '../types';

export const ProductList = ({ 
  title = "Sản phẩm mới nhất", 
  products: customProducts 
}: { 
  title?: string;
  products?: Product[];
}) => {
  const displayProducts = customProducts || PRODUCTS;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {title && <h2 className="text-3xl font-bold text-slate-900 mb-10">{title}</h2>}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-4 pink-shadow group h-full"
            >
              <Link to={`/product/${product.id}`} className="flex flex-col h-full">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-0.5 shadow-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Add to cart logic here if needed
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-xl text-secondary-pink hover:bg-secondary-pink hover:text-white transition-colors z-10"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
                
                <div className="px-2 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-slate-400 ml-1">(24)</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1 line-clamp-1 group-hover:text-primary-blue transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{product.category}</p>
                  
                  <div className="mt-auto">
                    <span className="text-xl font-bold text-primary-blue">
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
