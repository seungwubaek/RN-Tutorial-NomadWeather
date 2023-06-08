import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
// import { GlobalThemeProvider } from '~/contexts/Theme';  // 커스텀 Provider

import Main from '@screens/Main';

import DefaultTheme, { DarkTheme } from '~/styles/theme';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Main
        themeHandler={{isDarkMode, setIsDarkMode}}
      />
    </ThemeProvider>
  );
}
