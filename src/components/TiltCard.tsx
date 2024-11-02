import React from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  showMinMax?: boolean;
}

export function TiltCard({ children, title, icon, showMinMax = true }: TiltCardProps) {
  return (
    <div className="win98-card">
      <div className="win98-title">
        <span className="win98-title-text">
          {icon}
          {title}
        </span>
        <div className="win98-controls">
          {showMinMax && (
            <>
              <button className="win98-button minimize" aria-label="Minimize"></button>
              <button className="win98-button maximize" aria-label="Maximize"></button>
            </>
          )}
          <button className="win98-button close">×</button>
        </div>
      </div>
      <div className="win98-content">
        {children}
      </div>
    </div>
  );
}