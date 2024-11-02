import React, { useState } from 'react';
import { Newspaper } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function NewsWidget() {
  const [news] = useState([
    {
      title: 'SpaceX Successfully Launches New Satellite',
      source: 'Space News',
      time: '2h ago'
    },
    {
      title: 'New Breakthrough in Quantum Computing',
      source: 'Tech Daily',
      time: '3h ago'
    },
    {
      title: 'Climate Summit Reaches Historic Agreement',
      source: 'World News',
      time: '4h ago'
    }
  ]);

  return (
    <TiltCard title="Top Headlines" icon={<Newspaper />}>
      <div className="space-y-1">
        {news.map((item, index) => (
          <div key={index} className="win98-list-item">
            <div className="font-medium">{item.title}</div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>{item.source}</span>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </TiltCard>
  );
}