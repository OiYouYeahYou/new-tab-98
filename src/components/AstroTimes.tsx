import React from 'react';
import { Sun } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { useAstroTimes } from '../hooks/useAstroTimes';
import type { Settings } from '../hooks/useSettings';

interface AstroTimesProps {
  settings: Settings;
}

export function AstroTimes({ settings }: AstroTimesProps) {
  const times = useAstroTimes();

  const formatTime = (timeStr: string) => {
    if (timeStr === '--:--') return timeStr;
    
    const date = new Date(`1970/01/01 ${timeStr}`);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: settings.timeFormat === '12'
    });
  };

  return (
    <TiltCard title="Astronomical Times" icon={<Sun />}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span>Sunrise</span>
          <span>{formatTime(times.sunrise)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Sunset</span>
          <span>{formatTime(times.sunset)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Moon Phase</span>
          <span>{times.moonPhase}</span>
        </div>
      </div>
    </TiltCard>
  );
}