import { useState, useEffect } from 'react';

export function useTabHistory() {
  const [history, setHistory] = useState<chrome.history.HistoryItem[]>([]);

  useEffect(() => {
    // Mock history data
    setHistory([
      { title: 'React Documentation', url: 'https://react.dev', lastVisitTime: Date.now() - 1000 * 60 * 5 },
      { title: 'TypeScript Handbook', url: 'https://typescript.org', lastVisitTime: Date.now() - 1000 * 60 * 10 },
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', lastVisitTime: Date.now() - 1000 * 60 * 15 }
    ] as chrome.history.HistoryItem[]);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor((Date.now() - time) / (1000 * 60));
    if (minutes < 1) return 'just now';
    if (minutes === 1) return '1 minute ago';
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours === 1) return '1 hour ago';
    return `${hours} hours ago`;
  };

  return { history, formatTime };
}