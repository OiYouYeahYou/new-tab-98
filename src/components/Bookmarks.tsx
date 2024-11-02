import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Bookmarks() {
  const [bookmarks] = useState([
    {
      title: 'GitHub',
      url: 'https://github.com',
      icon: 'github.com'
    },
    {
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com',
      icon: 'stackoverflow.com'
    },
    {
      title: 'Dev.to',
      url: 'https://dev.to',
      icon: 'dev.to'
    },
    {
      title: 'Product Hunt',
      url: 'https://producthunt.com',
      icon: 'producthunt.com'
    }
  ]);

  return (
    <TiltCard title="Quick Links" icon={<Bookmark />}>
      <div className="grid grid-cols-2 gap-2">
        {bookmarks.map((bookmark, index) => (
          <a
            key={index}
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="win98-list-item flex items-center gap-2"
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${bookmark.icon}`}
              alt=""
              className="w-4 h-4"
            />
            <span className="truncate">{bookmark.title}</span>
          </a>
        ))}
      </div>
    </TiltCard>
  );
}