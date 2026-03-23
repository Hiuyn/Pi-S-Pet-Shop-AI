import React from 'react';

export const PlaceholderPage = ({ title }: { title: string }) => {
  return (
    <div className="pt-40 pb-20 px-4 text-center">
      <div className="max-w-xl mx-auto bg-white p-12 rounded-[40px] pink-shadow">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-500 mb-8">Trang này đang được phát triển. Vui lòng quay lại sau!</p>
        <div className="text-6xl animate-bounce">🏗️</div>
      </div>
    </div>
  );
};
