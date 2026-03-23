import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AllProducts } from './pages/AllProducts';
import { ProductDetail } from './pages/ProductDetail';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { PlaceholderPage } from './pages/PlaceholderPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<PlaceholderPage title="Về chúng tôi" />} />
            <Route path="/contact" element={<PlaceholderPage title="Liên hệ" />} />
            <Route path="/cart" element={<PlaceholderPage title="Giỏ hàng" />} />
            <Route path="/checkout" element={<PlaceholderPage title="Thanh toán" />} />
            <Route path="/profile" element={<PlaceholderPage title="Tài khoản" />} />
            <Route path="/flash-sale" element={<PlaceholderPage title="Flash Sale" />} />
            <Route path="/rewards" element={<PlaceholderPage title="Ưu đãi thành viên" />} />
            <Route path="/tracking" element={<PlaceholderPage title="Theo dõi đơn hàng" />} />
          </Routes>
        </div>
        <Footer />
        
        {/* Bottom Nav for Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 glass px-6 py-3 flex items-center justify-between z-50 border-t border-white/30">
          <button className="flex flex-col items-center gap-1 text-primary-blue">
            <div className="w-1 h-1 bg-primary-blue rounded-full" />
            <span className="text-[10px] font-bold">Trang chủ</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="text-[10px] font-bold">Cửa hàng</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="text-[10px] font-bold">Tin tức</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="text-[10px] font-bold">Tài khoản</span>
          </button>
        </div>
      </div>
    </Router>
  );
}
