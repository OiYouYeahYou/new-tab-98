import { useState, useEffect } from 'react';

export function useTabs() {
  const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);

  useEffect(() => {
    // Mock tab data
    setTabs([
      { title: 'GitHub - Your Profile', url: 'https://github.com' },
      { title: 'Stack Overflow - Questions', url: 'https://stackoverflow.com' },
      { title: 'Gmail', url: 'https://gmail.com' }
    ] as chrome.tabs.Tab[]);
  }, []);

  return tabs;
}