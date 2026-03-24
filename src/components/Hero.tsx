import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Thiên Đường Cho <br />
            <span className="text-primary-blue italic">Sen & Boss</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Khám phá thế giới đầy màu sắc với những sản phẩm cao cấp nhất dành riêng cho thú cưng của bạn. Chất lượng hàng đầu, niềm vui trọn vẹn.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-primary-blue text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary-blue/30"
            >
              Mua ngay <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors border border-slate-100"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 animate-float">
             {/* Placeholder for 3D Island Image */}
            <img
              src="`${import.meta.env.BASE_URL}images/thumbnail.png}`"
              alt="Chó và mèo ngủ cùng trái tim"
              className="w-full h-auto rounded-[40px] shadow-2xl object-cover aspect-[16/9]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if local image is not yet uploaded
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/cozy-dog-cat-hearts/1200/800";
              }}
            />
            
            {/* Testimonial Badge Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-20 -left-4 md:-left-8 bg-white/90 backdrop-blur-md p-5 rounded-[32px] shadow-2xl pink-shadow z-20 max-w-[240px] border border-white/50"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 italic mb-3">"Dịch vụ tuyệt vời, Boss nhà mình rất thích!"</p>
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/100?u=lananh"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-primary-blue/20"
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-[10px] text-slate-800">Chị Lan Anh</span>
              </div>
            </motion.div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-pink/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-blue/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
