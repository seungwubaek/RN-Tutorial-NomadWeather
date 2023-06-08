import { createContext, useContext, useState } from 'react';

// import DefaultTheme, { DarkTheme } from '@styles/theme';
import DefaultTheme, { DarkTheme } from '../styles/theme';

const themeContext = createContext(null);

export const GlobalThemeProvider = (props) => {
  const themeType = props.themeType || 'default';

  const [theme, setTheme] = useState(themeType === 'dark' ? DarkTheme : DefaultTheme);

  const toggleTheme = () => {
    setTheme(themeType === 'dark' ? DefaultTheme : DarkTheme);
  };

  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </themeContext.Provider>
  );
};

export const useGlobalTheme = () => {
  return useContext(themeContext);
}
