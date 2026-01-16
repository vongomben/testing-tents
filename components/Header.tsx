
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
      <div className="flex items-center p-4 justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          <h1 className="text-lg font-bold tracking-tight">Eco-Market</h1>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
