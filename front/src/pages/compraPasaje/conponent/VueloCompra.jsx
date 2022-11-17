import React from 'react';
import { Paper, Typography } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { useApiContext } from '../../../context/state';

const VueloCompra = () => {
  const { vuelo, pasajeEscogido } = useApiContext().state.vuelo;

  return (
    <Paper elevation={0} sx={{ p: 6 }}>
      <AirplanemodeActiveIcon sx={{ fontSize: '100px', mb: 4 }} />
      <Typography variant="h4" component="h4" sx={{ mb: 4 }}>
        {vuelo.origen}
        {' '}
        -
        {' '}
        {vuelo.destino}
      </Typography>
      <Typography variant="h4" component="h5" sx={{ mb: 2 }}>
        Clase
      </Typography>
      <Typography variant="p" component="p" sx={{ mb: 4 }}>
        {pasajeEscogido.categoria}
      </Typography>
      <Typography variant="h4" component="h5" sx={{ mb: 2 }}>
        Fecha
      </Typography>
      <Typography variant="p" component="p" sx={{ mb: 4 }}>
        {vuelo.fecha}
      </Typography>
      <Typography variant="h4" component="h5" sx={{ mb: 2 }}>
        Precio
      </Typography>
      <Typography variant="p" component="p" sx={{ fontSize: '80px' }}>
        $
        {pasajeEscogido.total}
      </Typography>
    </Paper>
  );
};

export default VueloCompra;
