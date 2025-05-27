
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Return saved theme if it exists, otherwise use system preference
    return (savedTheme as Theme) || (prefersDark ? 'dark' : 'light');
  });

  // Update class on document element when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply transition class for smooth theme changes
    root.style.setProperty('--transition-speed', '0.3s');
    root.classList.add('theme-transition');
    
    // Remove transition class after transition completes to prevent affecting other animations
    const transitionEndHandler = () => {
      root.classList.remove('theme-transition');
    };
    
    const transitionTimeout = setTimeout(transitionEndHandler, 300);
    
    return () => {
      clearTimeout(transitionTimeout);
      root.removeEventListener('transitionend', transitionEndHandler);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
