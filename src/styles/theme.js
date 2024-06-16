// src/themes.js
import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: [
      'Montserrat',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,     // default
      sm: 640,   // TailwindCSS sm
      md: 768,   // TailwindCSS md
      lg: 1024,  // TailwindCSS lg
      xl: 1280,  // TailwindCSS xl
      xxl: 1536, // TailwindCSS 2xl
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '100 900', // Include all font weights
            fontDisplay: 'swap', // Use swap to ensure text renders with fallback fonts while Montserrat is loading
            src: `
              url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2) format('woff2')
            `,
          },
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333333',
      background: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
      background: '#333333'
    },
    accent: {
      main: '#00ffa6',
      background: '#333333'
    },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      background: '#333333'
    },
    secondary: {
      main: '#333333',
      background: '#ffffff'
    },
    accent: {
      main: '#333333',
      background: '#00ffa6'
    },
  },
  ...commonSettings,
});
