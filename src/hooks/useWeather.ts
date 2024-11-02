import { useState, useEffect } from 'react';

interface Weather {
  temp: string;
  condition: string;
  location: string;
}

export function useWeather() {
  const [weather, setWeather] = useState<Weather>({
    temp: '--',
    condition: 'Loading...',
    location: 'Loading...'
  });

  useEffect(() => {
    // Mock weather data
    setWeather({
      temp: '72°F',
      condition: 'Partly Cloudy',
      location: 'San Francisco, CA'
    });
  }, []);

  return weather;
}