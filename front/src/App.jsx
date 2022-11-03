import React from 'react';
import NavBar from './components/nav/NavBar';
import Pasaje from './pages/pasaje/components/MyPassage.pasaje';
import './index.css';

function App() {
  return (
    <div>
      <div className="background">
        <header>
          <NavBar />
        </header>

        <main>
          <Pasaje />
        </main>
      </div>
      <div>
        <footer className="footer">Pie de Pagina</footer>
      </div>
    </div>
  );
}

export default App;
