import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../styles/theme';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themeMode = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);

  const toggleTheme = () => {
    console.log('theme1', theme);
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={themeMode}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
