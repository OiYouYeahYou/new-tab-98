import React from 'react';
import { Layout } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { useTabs } from '../hooks/useTabs';

export function TabList() {
  const tabs = useTabs();

  return (
    <TiltCard title="Open Tabs" icon={<Layout />}>
      <div className="space-y-1">
        {tabs.map((tab, index) => (
          <div 
            key={index}
            className="win98-list-item flex items-center gap-2"
          >
            <img 
              src={`https://www.google.com/s2/favicons?domain=${new URL(tab.url || '').hostname}`}
              alt=""
              className="w-4 h-4"
            />
            <span className="truncate">{tab.title}</span>
          </div>
        ))}
      </div>
    </TiltCard>
  );
}