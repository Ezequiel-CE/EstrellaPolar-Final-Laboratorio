import React from 'react';
import NavBar from '../../components/nav/NavBar';

function Home() {
  return (
    <div>
      <div className="background">
        <header>
          <NavBar />
        </header>
      </div>
      <div>
        <footer className="footer">Pie de Pagina</footer>
      </div>
    </div>
  );
}

export default Home;
