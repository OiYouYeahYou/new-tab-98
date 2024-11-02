import React from 'react';
import { History } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { useTabHistory } from '../hooks/useTabHistory';

export function TabHistory() {
  const { history, formatTime } = useTabHistory();

  return (
    <TiltCard title="Recently Closed" icon={<History />}>
      <div className="space-y-1">
        {history.map((item, index) => (
          <div 
            key={index}
            className="win98-list-item flex items-center justify-between"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <img 
                src={`https://www.google.com/s2/favicons?domain=${new URL(item.url || '').hostname}`}
                alt=""
                className="w-4 h-4 flex-shrink-0"
              />
              <span className="truncate">{item.title}</span>
            </div>
            <span className="text-sm ml-4 flex-shrink-0">
              {formatTime(item.lastVisitTime)}
            </span>
          </div>
        ))}
      </div>
    </TiltCard>
  );
}