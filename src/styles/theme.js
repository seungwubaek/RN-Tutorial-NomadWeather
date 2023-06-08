const DefaultTheme = {
  mode: 'light',
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    text: '#000000',
    background: '#b3e5fc',
    switch: {
      track: {
        off: '#767577', on: '#81b0ff',
      },
      thumb: '#f4f3f4',
      iosBackground: '#3e3e3e',
    }
  },
}

export default DefaultTheme;

export const DarkTheme = {
  mode: 'dark',
  colors: {
    ...DefaultTheme.colors,
    text: '#ffffff',
    background: '#6c757d',
    switch: {
      ...DefaultTheme.colors.switch,
      thumb: '#f5dd4b',
    }
  },
}
