import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../components/ProductList';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../constants';

export const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Tất cả danh mục';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('Mới nhất');

  // Update selectedCategory if searchParams changes (e.g. clicking another category link while on the page)
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (selectedCategory !== 'Tất cả danh mục') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    if (sortBy === 'Giá thấp đến cao') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Giá cao đến thấp') {
      result.sort((a, b) => b.price - a.price);
    }
    // "Mới nhất" is default order in PRODUCTS array

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Cửa hàng</h1>
            <p className="text-slate-500">Khám phá tất cả sản phẩm dành cho thú cưng của bạn</p>
          </div>
          <div className="flex gap-4">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-slate-100 rounded-xl px-4 py-2 focus:outline-none focus:border-primary-blue cursor-pointer"
            >
              <option>Tất cả danh mục</option>
              {PRODUCT_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-100 rounded-xl px-4 py-2 focus:outline-none focus:border-primary-blue cursor-pointer"
            >
              <option>Mới nhất</option>
              <option>Giá thấp đến cao</option>
              <option>Giá cao đến thấp</option>
            </select>
          </div>
        </div>
        
        {filteredAndSortedProducts.length > 0 ? (
          <ProductList title="" products={filteredAndSortedProducts} />
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">Không tìm thấy sản phẩm nào phù hợp.</p>
          </div>
        )}
      </div>
    </div>
  );
};
