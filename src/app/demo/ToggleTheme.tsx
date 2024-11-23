'use client';

import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

const ToggleTheme: React.FC = () => {
  const { theme, setTheme } = useTheme();

  if (!window) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      aria-label="Toggle Theme"
    >
      {theme ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ToggleTheme;
