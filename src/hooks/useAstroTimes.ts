import { useState, useEffect } from 'react';
import SunCalc from 'suncalc';

interface AstroTimes {
  sunrise: string;
  sunset: string;
  moonPhase: string;
}

export function useAstroTimes() {
  const [times, setTimes] = useState<AstroTimes>({
    sunrise: '--:--',
    sunset: '--:--',
    moonPhase: '--'
  });

  useEffect(() => {
    const calculateTimes = () => {
      const date = new Date();
      const lat = 37.7749;
      const lng = -122.4194;
      
      const sunTimes = SunCalc.getTimes(date, lat, lng);
      const moonIllum = SunCalc.getMoonIllumination(date);
      
      const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      };

      const getMoonPhase = (phase: number) => {
        if (phase < 0.125) return '🌑 New Moon';
        if (phase < 0.375) return '🌓 First Quarter';
        if (phase < 0.625) return '🌕 Full Moon';
        if (phase < 0.875) return '🌗 Last Quarter';
        return '🌑 New Moon';
      };

      setTimes({
        sunrise: formatTime(sunTimes.sunrise),
        sunset: formatTime(sunTimes.sunset),
        moonPhase: getMoonPhase(moonIllum.phase)
      });
    };

    calculateTimes();
  }, []);

  return times;
}