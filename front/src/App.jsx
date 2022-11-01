import React from 'react';
import Login from './pages/login/Login';
import NavBar from './components/nav/NavBar';
import './index.css';

function App() {
  return (
    <div className="background">
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
