
import React from 'react';
import { NavTab } from '../types';

interface BottomNavProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: NavTab; icon: string; label: string }[] = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'shop', icon: 'explore', label: 'Shop' },
    { id: 'impact', icon: 'analytics', label: 'Impact' },
    { id: 'profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 pb-8 pt-3">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              activeTab === tab.id 
                ? 'text-primary' 
                : 'text-accent dark:text-gray-500'
            }`}
          >
            <span 
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: activeTab === tab.id ? "'FILL' 1" : "'FILL' 0" }}
            >
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold tracking-tight">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
