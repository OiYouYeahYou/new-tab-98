import { useState } from 'react';

export interface Settings {
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  temperatureUnit: 'F' | 'C';
  timeFormat: '12' | '24';
  theme: 'default' | 'blue' | 'green' | 'gray';
}

export function useSettings() {
  const [settings, setSettings] = useState<Settings>({
    location: {
      lat: 37.7749,
      lng: -122.4194,
      name: 'San Francisco, CA'
    },
    temperatureUnit: 'F',
    timeFormat: '12',
    theme: 'default'
  });

  const [isOpen, setIsOpen] = useState(false);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return {
    settings,
    updateSettings,
    isOpen,
    setIsOpen
  };
}