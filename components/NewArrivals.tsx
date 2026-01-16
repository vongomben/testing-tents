
import React from 'react';
import { PRODUCTS } from '../constants';

const NewArrivals: React.FC = () => {
  return (
    <section className="pt-2">
      <div className="flex items-center justify-between px-4 mb-2">
        <h2 className="text-xl font-bold tracking-tight">New Arrivals</h2>
        <button className="text-sm font-bold text-primary hover:underline">View all</button>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-4">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-64 group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
              <div 
                className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url('${product.imageUrl}')` }}
              />
              <button className="absolute top-3 right-3 bg-white/90 dark:bg-black/50 p-2 rounded-full backdrop-blur-sm shadow-sm">
                <span className="material-symbols-outlined text-sm">favorite</span>
              </button>
              {product.isLimited && (
                <div className="absolute bottom-3 left-3 bg-primary text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  Limited Edition
                </div>
              )}
            </div>
            <h3 className="font-bold text-base truncate">{product.name}</h3>
            <div className="flex items-center justify-between mt-1">
              <p className="text-sm text-accent">{product.material}</p>
              <p className="font-bold text-primary">${product.price}</p>
            </div>
          </div>
        ))}
        {/* Placeholder for more scrolling */}
        <div className="flex-shrink-0 w-2"></div>
      </div>
    </section>
  );
};

export default NewArrivals;
