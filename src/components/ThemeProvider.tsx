import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    divider: '#e0e0e0',
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    divider: '#2e2e2e',
  },
});

export { lightTheme, darkTheme, ThemeProvider };
