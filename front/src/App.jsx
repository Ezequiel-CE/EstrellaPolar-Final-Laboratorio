import React from 'react';
import NavBar from './components/nav/NavBar';
import FindFlight from './components/findFlight/FindFlight';
import './index.css';

function App() {
  return (
    <div>
      <div className="background">
        <header>
          <NavBar />
        </header>

        <main>
          <FindFlight />
        </main>
      </div>
      <div>
        <footer className="footer">Pie de Pagina</footer>
      </div>
    </div>
  );
}

export default App;
