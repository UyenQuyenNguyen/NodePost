import Home from './pages/home';
import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import './App.css';
import { ThemeProvider } from '@mui/material';

function App() {
  const { theme, isLight } = useContext(ThemeContext)
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
