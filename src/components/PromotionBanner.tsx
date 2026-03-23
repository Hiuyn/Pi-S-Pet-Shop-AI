import React from 'react';
import { motion } from 'motion/react';

export const PromotionBanner = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-primary-blue rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
      >
        <div className="relative z-10">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
            Khuyến mãi đặc biệt
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Giảm giá tới 50% <br /> Cho đơn hàng đầu tiên
          </h2>
          <p className="text-white/80 mb-8 max-w-md">
            Nhập mã <span className="font-bold text-white">PETLOVE</span> để nhận ưu đãi ngay hôm nay. Miễn phí vận chuyển cho mọi đơn hàng trên 500k.
          </p>
          <button className="bg-white text-primary-blue px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
            Nhận ưu đãi ngay
          </button>
        </div>
        
        <div className="relative z-10 w-full md:w-1/3 aspect-square bg-white/10 rounded-full flex items-center justify-center animate-pulse">
           <div className="text-8xl">🎁</div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/10 rounded-full" />
      </motion.div>
    </section>
  );
};
