import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-4 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              P
            </div>
            <span className="font-bold text-xl text-slate-800">Pi Sà Pet Shop</span>
          </Link>
          <p className="text-slate-500 mb-6">
            Thiên đường mua sắm hiện đại dành cho thú cưng. Chúng tôi mang đến những sản phẩm tốt nhất cho người bạn bốn chân của bạn.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary-blue hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary-blue hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary-blue hover:text-white transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6">Liên kết nhanh</h4>
          <ul className="space-y-4 text-slate-500">
            <li><Link to="/products" className="hover:text-primary-blue transition-colors">Cửa hàng</Link></li>
            <li><Link to="/about" className="hover:text-primary-blue transition-colors">Về chúng tôi</Link></li>
            <li><Link to="/blog" className="hover:text-primary-blue transition-colors">Tin tức</Link></li>
            <li><Link to="/contact" className="hover:text-primary-blue transition-colors">Liên hệ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6">Thông tin liên hệ</h4>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary-blue shrink-0" />
              <span>123 Đường 3D, Quận 1, TP. Hồ Chí Minh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary-blue shrink-0" />
              <span>0123 456 789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary-blue shrink-0" />
              <span>contact@pisapet.vn</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6">Bản tin</h4>
          <p className="text-slate-500 mb-4">Đăng ký để nhận thông tin khuyến mãi mới nhất.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email của bạn"
              className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-primary-blue"
            />
            <button className="bg-primary-blue text-white p-2 rounded-xl hover:bg-primary-blue/90 transition-colors">
              <Mail size={20} />
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2026 Pi Sà Pet Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};
