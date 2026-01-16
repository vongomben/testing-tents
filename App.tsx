
import React, { useState } from 'react';
import Header from './components/Header';
import ImpactCard from './components/ImpactCard';
import NewArrivals from './components/NewArrivals';
import FeaturedStory from './components/FeaturedStory';
import MaterialGrid from './components/MaterialGrid';
import Newsletter from './components/Newsletter';
import BottomNav from './components/BottomNav';
import { NavTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  return (
    <div className="min-h-screen max-w-lg mx-auto relative bg-background-light dark:bg-background-dark pb-24">
      <Header />
      
      <main className="flex flex-col gap-2">
        {activeTab === 'home' && (
          <>
            <ImpactCard />
            <NewArrivals />
            <FeaturedStory />
            <MaterialGrid />
            <Newsletter />
          </>
        )}
        
        {activeTab !== 'home' && (
          <div className="flex flex-col items-center justify-center p-20 text-center opacity-50">
            <span className="material-symbols-outlined text-6xl mb-4">construction</span>
            <h2 className="text-xl font-bold uppercase tracking-tight">Under Construction</h2>
            <p className="text-sm">The {activeTab} section will be available soon.</p>
          </div>
        )}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
