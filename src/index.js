import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './context/themecontext';
import { StoryProvider } from './context/storiescontext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <StoryProvider>
      <App />
    </StoryProvider>
  </ThemeProvider>

);
