'use client';

import React from 'react';
import ToggleTheme from './ToggleTheme';

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="flex justify-end p-5">
        <ToggleTheme />
      </div>
      {children}
    </div>
  );
};

export default ThemeWrapper;
