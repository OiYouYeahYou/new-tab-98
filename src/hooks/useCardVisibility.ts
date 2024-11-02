import { useState } from 'react';

export function useCardVisibility() {
  const [visibleCards, setVisibleCards] = useState({
    weather: true,
    astro: true,
    news: true,
    tabs: true,
    todos: true,
    history: true,
    bookmarks: true
  });

  const toggleCard = (cardId: string) => {
    setVisibleCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return { visibleCards, toggleCard };
}