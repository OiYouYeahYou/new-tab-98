import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface StatusBarProps {
  visibleCards: Record<string, boolean>;
  onToggleCard: (cardId: string) => void;
}

export function StatusBar({ visibleCards, onToggleCard }: StatusBarProps) {
  const cards = [
    { id: 'weather', label: 'Weather' },
    { id: 'astro', label: 'Astro' },
    { id: 'news', label: 'News' },
    { id: 'tabs', label: 'Tabs' },
    { id: 'todos', label: 'Todo' },
    { id: 'history', label: 'History' },
    { id: 'bookmarks', label: 'Links' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-7 bg-[#c0c0c0] border-t-2 border-[#dfdfdf] flex items-center px-2 text-xs gap-2">
      <div className="flex-1 flex items-center gap-2">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => onToggleCard(card.id)}
            className={`win98-action-button h-5 px-2 py-0 flex items-center gap-1 ${
              visibleCards[card.id] ? 'bg-gray-300' : ''
            }`}
          >
            {visibleCards[card.id] ? (
              <Eye className="w-3 h-3" />
            ) : (
              <EyeOff className="w-3 h-3" />
            )}
            {card.label}
          </button>
        ))}
      </div>
      <div className="border-l-2 border-[#808080] h-full mx-2" />
      <div className="text-xs">Ready</div>
    </div>
  );
}