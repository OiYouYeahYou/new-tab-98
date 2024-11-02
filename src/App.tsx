import React, { useState } from 'react';
import { Search, Newspaper, Calendar, Bookmark, Settings as SettingsIcon } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { Weather } from './components/Weather';
import { AstroTimes } from './components/AstroTimes';
import { TabList } from './components/TabList';
import { TabHistory } from './components/TabHistory';
import { NewsWidget } from './components/NewsWidget';
import { TodoList } from './components/TodoList';
import { Bookmarks } from './components/Bookmarks';
import { SettingsDialog } from './components/SettingsDialog';
import { StatusBar } from './components/StatusBar';
import { useTime } from './hooks/useTime';
import { useSettings } from './hooks/useSettings';
import { useCardVisibility } from './hooks/useCardVisibility';

export default function App() {
  const time = useTime();
  const { settings, updateSettings, isOpen, setIsOpen } = useSettings();
  const { visibleCards, toggleCard } = useCardVisibility();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (engine: 'google' | 'chatgpt' | 'kagi') => {
    const urls = {
      google: `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`,
      chatgpt: `https://chat.openai.com`,
      kagi: `https://kagi.com/search?q=${encodeURIComponent(searchQuery)}`
    };
    window.open(urls[engine], '_blank');
  };

  return (
    <div className="min-h-screen w-full p-4 pb-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-start mb-4">
          <div className="win98-card">
            <div className="win98-title">
              <span className="win98-title-text">System Time</span>
              <div className="win98-controls">
                <button className="win98-button">×</button>
              </div>
            </div>
            <div className="win98-content text-center">
              <div className="text-2xl font-bold">
                {time.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: settings.timeFormat === '12'
                })}
              </div>
              <div className="text-sm">
                {time.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="win98-action-button"
          >
            <SettingsIcon className="w-4 h-4 mr-2" />
            Settings
          </button>
        </div>

        <div className="mb-4">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-4">
            {visibleCards.weather && <Weather settings={settings} />}
            {visibleCards.astro && <AstroTimes settings={settings} />}
            {visibleCards.news && <NewsWidget />}
          </div>
          <div className="space-y-4">
            {visibleCards.tabs && <TabList />}
            {visibleCards.todos && <TodoList />}
          </div>
          <div className="space-y-4">
            {visibleCards.history && <TabHistory />}
            {visibleCards.bookmarks && <Bookmarks />}
          </div>
        </div>
      </div>

      {isOpen && (
        <SettingsDialog
          settings={settings}
          onUpdate={updateSettings}
          onClose={() => setIsOpen(false)}
        />
      )}

      <StatusBar 
        visibleCards={visibleCards}
        onToggleCard={toggleCard}
      />
    </div>
  );
}