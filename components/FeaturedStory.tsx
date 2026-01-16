
import React from 'react';
import { STORY_IMAGE } from '../constants';

const FeaturedStory: React.FC = () => {
  return (
    <section className="p-4">
      <div className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10"></div>
        <div 
          className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: `url('${STORY_IMAGE}')` }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
          <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Our Process</p>
          <h2 className="text-2xl font-bold text-white mb-3">The Lifecycle of a Tent</h2>
          <button className="bg-primary text-black font-extrabold px-6 py-2.5 rounded-xl w-fit text-sm shadow-lg hover:bg-white hover:scale-105 transition-all">
            Read the Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
