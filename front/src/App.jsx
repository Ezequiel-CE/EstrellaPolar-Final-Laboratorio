import React from 'react';
import NavBar from './components/nav/NavBar';
import FindFlight from './components/findFlight/FindFlight';
import './index.css';

function App() {
  return (
    <div className="background">
      <NavBar />
      <FindFlight />
    </div>
  );
}

export default App;
