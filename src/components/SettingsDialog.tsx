import React, { useState } from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { TiltCard } from './TiltCard';
import type { Settings } from '../hooks/useSettings';

interface SettingsDialogProps {
  settings: Settings;
  onUpdate: (settings: Partial<Settings>) => void;
  onClose: () => void;
}

export function SettingsDialog({ settings, onUpdate, onClose }: SettingsDialogProps) {
  const [location, setLocation] = useState(settings.location.name);

  const handleLocationUpdate = () => {
    // In a real app, we would geocode the location string
    // For now, we'll just update the name
    onUpdate({
      location: {
        ...settings.location,
        name: location
      }
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <TiltCard title="System Settings" icon={<SettingsIcon />} showMinMax={false}>
        <div className="w-[400px] space-y-4">
          {/* Location Settings */}
          <div className="space-y-2">
            <label className="block">Location</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="win98-input flex-1"
                placeholder="Enter city name"
              />
              <button
                onClick={handleLocationUpdate}
                className="win98-action-button"
              >
                Update
              </button>
            </div>
          </div>

          {/* Temperature Unit */}
          <div className="space-y-2">
            <label className="block">Temperature Unit</label>
            <div className="flex gap-2">
              <button
                className={`win98-action-button flex-1 ${settings.temperatureUnit === 'F' ? 'bg-gray-300' : ''}`}
                onClick={() => onUpdate({ temperatureUnit: 'F' })}
              >
                Fahrenheit
              </button>
              <button
                className={`win98-action-button flex-1 ${settings.temperatureUnit === 'C' ? 'bg-gray-300' : ''}`}
                onClick={() => onUpdate({ temperatureUnit: 'C' })}
              >
                Celsius
              </button>
            </div>
          </div>

          {/* Time Format */}
          <div className="space-y-2">
            <label className="block">Time Format</label>
            <div className="flex gap-2">
              <button
                className={`win98-action-button flex-1 ${settings.timeFormat === '12' ? 'bg-gray-300' : ''}`}
                onClick={() => onUpdate({ timeFormat: '12' })}
              >
                12-hour
              </button>
              <button
                className={`win98-action-button flex-1 ${settings.timeFormat === '24' ? 'bg-gray-300' : ''}`}
                onClick={() => onUpdate({ timeFormat: '24' })}
              >
                24-hour
              </button>
            </div>
          </div>

          {/* Theme Selection */}
          <div className="space-y-2">
            <label className="block">Color Theme</label>
            <div className="grid grid-cols-2 gap-2">
              {(['default', 'blue', 'green', 'gray'] as const).map((theme) => (
                <button
                  key={theme}
                  className={`win98-action-button ${settings.theme === theme ? 'bg-gray-300' : ''}`}
                  onClick={() => onUpdate({ theme })}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <button onClick={onClose} className="win98-action-button">
              OK
            </button>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}