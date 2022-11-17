import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import '../../pages/home/Home.css';

function Layout2() {
  return (
    <>
      <div className="hero">
        <NavBar />
        <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Layout2;
