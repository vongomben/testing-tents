
import React from 'react';

const ImpactCard: React.FC = () => {
  return (
    <section className="p-4">
      <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm overflow-hidden relative group">
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-1">Our Collective Impact</p>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-2">1,248</h2>
          <p className="text-lg font-medium leading-tight text-[#111813] dark:text-gray-300">Tents saved from landfills this month</p>
          <div className="mt-4 flex items-center gap-2 text-primary font-bold">
            <span className="material-symbols-outlined font-bold">trending_up</span>
            <span className="text-sm">+12% vs last month</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
          <span className="material-symbols-outlined text-8xl">recycling</span>
        </div>
      </div>
    </section>
  );
};

export default ImpactCard;
