import React from 'react';
import { Cloud } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { useWeather } from '../hooks/useWeather';
import type { Settings } from '../hooks/useSettings';

interface WeatherProps {
  settings: Settings;
}

export function Weather({ settings }: WeatherProps) {
  const weather = useWeather();

  const formatTemperature = (temp: string) => {
    const value = parseInt(temp);
    if (isNaN(value)) return temp;
    
    if (settings.temperatureUnit === 'C') {
      const celsius = Math.round((value - 32) * 5 / 9);
      return `${celsius}°C`;
    }
    return temp;
  };

  return (
    <TiltCard title="Weather" icon={<Cloud />}>
      <div>
        <div className="text-4xl font-light mb-2">{formatTemperature(weather.temp)}</div>
        <div>{weather.condition}</div>
        <div className="text-sm mt-1">{settings.location.name}</div>
      </div>
    </TiltCard>
  );
}