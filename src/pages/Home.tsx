import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryList } from '../components/CategoryList';
import { ProductList } from '../components/ProductList';
import { PromotionBanner } from '../components/PromotionBanner';
import { BlogList } from '../components/BlogList';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <main>
      <Hero />
      <CategoryList />
      <ProductList />
      <PromotionBanner />
      <ProductList title="Gợi ý cho bạn" />
      <BlogList />
      <Testimonials />
    </main>
  );
};
