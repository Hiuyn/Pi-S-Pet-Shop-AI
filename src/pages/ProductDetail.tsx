import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { ShoppingCart, Star, ArrowLeft, Heart, Share2, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-40 pb-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Không tìm thấy sản phẩm</h2>
        <Link to="/products" className="text-primary-blue font-bold hover:underline">
          Quay lại cửa hàng
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Back button */}
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-blue transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Quay lại cửa hàng</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden bg-white pink-shadow p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute top-8 left-8 bg-primary-blue text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
              Yêu thích
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="inline-block bg-secondary-pink/10 text-secondary-pink px-3 py-1 rounded-lg text-sm font-bold mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-400 text-sm border-l border-slate-200 pl-4">
                  4.9 (128 đánh giá)
                </span>
                <span className="text-slate-400 text-sm border-l border-slate-200 pl-4">
                  500+ đã bán
                </span>
              </div>

              <div className="text-3xl font-bold text-primary-blue mb-8">
                {product.price.toLocaleString('vi-VN')}đ
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity and Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center bg-slate-100 rounded-2xl p-1 w-fit">
                  <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-primary-blue font-bold text-xl">-</button>
                  <span className="w-12 text-center font-bold text-slate-800">1</span>
                  <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-primary-blue font-bold text-xl">+</button>
                </div>
                
                <button className="flex-grow bg-primary-blue text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-primary-blue/30">
                  <ShoppingCart size={20} />
                  Thêm vào giỏ hàng
                </button>
                
                <button className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-secondary-pink hover:border-secondary-pink transition-all">
                  <Heart size={24} />
                </button>
                
                <button className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-primary-blue hover:border-primary-blue transition-all">
                  <Share2 size={24} />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-slate-50 rounded-[32px]">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-blue shadow-sm">
                    <Truck size={20} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Giao hàng nhanh</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-blue shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Chính hãng 100%</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-blue shadow-sm">
                    <RefreshCcw size={20} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Đổi trả 7 ngày</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* More details / Tabs */}
        <div className="mt-20">
          <div className="border-b border-slate-100 mb-10 flex gap-8">
            <button className="pb-4 border-b-2 border-primary-blue text-primary-blue font-bold">Mô tả chi tiết</button>
            <button className="pb-4 text-slate-400 font-bold hover:text-slate-600 transition-colors">Đánh giá (128)</button>
            <button className="pb-4 text-slate-400 font-bold hover:text-slate-600 transition-colors">Chính sách vận chuyển</button>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">
              Sản phẩm {product.name} là lựa chọn hàng đầu cho thú cưng của bạn. Với công thức đặc biệt và quy trình sản xuất nghiêm ngặt, chúng tôi cam kết mang đến chất lượng tốt nhất.
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Nguyên liệu tự nhiên, an toàn tuyệt đối</li>
              <li>• Cung cấp đầy đủ vitamin và khoáng chất thiết yếu</li>
              <li>• Giúp thú cưng phát triển toàn diện và khỏe mạnh</li>
              <li>• Hương vị thơm ngon, kích thích vị giác</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
