import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (engine: 'google' | 'chatgpt' | 'kagi') => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch('google');
    }
  };

  return (
    <div className="win98-card">
      <div className="win98-title">
        <span className="win98-title-text">Internet Search</span>
        <div className="win98-controls">
          <button className="win98-button">×</button>
        </div>
      </div>
      <div className="win98-content">
        <div className="flex gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search the web..."
            className="win98-input flex-1"
          />
          <button onClick={() => onSearch('google')} className="win98-action-button">
            Search
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <button onClick={() => onSearch('google')} className="win98-action-button flex-1">
            Google
          </button>
          <button onClick={() => onSearch('chatgpt')} className="win98-action-button flex-1">
            ChatGPT
          </button>
          <button onClick={() => onSearch('kagi')} className="win98-action-button flex-1">
            Kagi
          </button>
        </div>
      </div>
    </div>
  );
}