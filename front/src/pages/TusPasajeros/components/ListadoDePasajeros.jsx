import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Pasajero from './Pasajero';

const ListadoDePasajeros = ({ data }) => (
  <Container>
    <Typography variant="h2" component="h2" textAlign="center" pb={3}>
      Tus pasajeros
    </Typography>
    <Box>
      {data.map((d) => (
        <Pasajero info={d.pasajero} />
      ))}
    </Box>
  </Container>
);

export default ListadoDePasajeros;
