import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    console.log(isDarkTheme ? "Switching to Light Theme" : "Switching to Dark Theme");
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    console.log(`Current Theme: ${isDarkTheme ? 'Dark' : 'Light'}`);
    const className = 'dark-theme';
    const element = document.documentElement;

    if (isDarkTheme) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
