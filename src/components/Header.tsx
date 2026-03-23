import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu as MenuIcon } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
            P
          </div>
          <span className="font-bold text-xl text-slate-800 hidden sm:block">Pi Sà Pet Shop</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <Link to="/" className="hover:text-primary-blue transition-colors">Trang chủ</Link>
          <Link to="/products" className="hover:text-primary-blue transition-colors">Sản phẩm</Link>
          <Link to="/blog" className="hover:text-primary-blue transition-colors">Tin tức</Link>
          <Link to="/contact" className="hover:text-primary-blue transition-colors">Liên hệ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/50 rounded-full transition-colors">
            <Search size={20} className="text-slate-600" />
          </button>
          <Link to="/cart" className="p-2 hover:bg-white/50 rounded-full transition-colors relative">
            <ShoppingCart size={20} className="text-slate-600" />
            <span className="absolute top-0 right-0 bg-secondary-pink text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
          <button className="md:hidden p-2 hover:bg-white/50 rounded-full transition-colors">
            <MenuIcon size={20} className="text-slate-600" />
          </button>
        </div>
      </div>
    </header>
  );
};
