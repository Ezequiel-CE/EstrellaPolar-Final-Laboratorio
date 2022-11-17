import { Container } from '@mui/material';
import React from 'react';

const LayoutNoNav = ({ children }) => (
  <div className="container">
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {children}
    </Container>
  </div>
);

export default LayoutNoNav;
