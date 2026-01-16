
import React from 'react';
import { MATERIALS } from '../constants';

const MaterialGrid: React.FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold tracking-tight mb-4">Shop by Material</h2>
      <div className="grid grid-cols-2 gap-3">
        {MATERIALS.map((material) => (
          <div key={material.id} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
            <div 
              className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
              style={{ backgroundImage: `url('${material.imageUrl}')` }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/25 transition-colors">
              <span className="text-white font-bold text-lg">{material.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialGrid;
