import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/nav/styles/themeConfig';
import Login from './pages/login/Login';
import NavBar from './components/nav/NavBar';
import './index.css';

function App() {
  return (
    <div className="background">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;
