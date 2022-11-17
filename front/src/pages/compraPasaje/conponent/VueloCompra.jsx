import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { useApiContext } from '../../../context/state';

const VueloCompra = () => {
  const { vuelo, pasajeEscogido } = useApiContext().state.vuelo;

  return (
    <Paper elevation={0} sx={{ p: 6 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={6}>
          <AirplanemodeActiveIcon sx={{ fontSize: '100px', mb: 4 }} />
        </Grid>
        <Grid xs={8}>
          <Typography
            variant="h4"
            component="h4"
            color="black"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Estrella Polar
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Typography variant="h4" component="h4" color="black" sx={{ mb: 4 }}>
            Origen
          </Typography>
          <Typography variant="h5" component="h5" sx={{ mb: 4 }}>
            {vuelo.origen}
          </Typography>
          <Typography variant="h4" component="h5" color="black" sx={{ mb: 2 }}>
            Clase
          </Typography>
          <Typography variant="h5" component="h5" sx={{ mb: 4 }}>
            {pasajeEscogido.categoria}
          </Typography>
        </Grid>
        <Grid xs={8}>
          <Typography variant="h4" component="h4" color="black" sx={{ mb: 4 }}>
            Destino
          </Typography>
          <Typography variant="h5" component="h5" sx={{ mb: 4 }}>
            {vuelo.destino}
          </Typography>
          <Typography variant="h4" component="h5" color="black" sx={{ mb: 2 }}>
            Fecha
          </Typography>
          <Typography variant="p" component="h3" sx={{ mb: 4 }}>
            {vuelo.fecha}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h3" component="h5" color="black" sx={{ mb: 2 }}>
        Precio
      </Typography>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Typography variant="p" component="p" sx={{ fontSize: '80px' }}>
            U$D
          </Typography>
        </Grid>
        <Grid xs={8}>
          <Typography variant="p" component="p" sx={{ fontSize: '80px' }}>
            {pasajeEscogido.total}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VueloCompra;
