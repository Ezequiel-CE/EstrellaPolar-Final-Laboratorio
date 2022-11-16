import React from 'react';
import { Paper, Typography } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const VueloCompra = () => (
  <Paper elevation={0} sx={{ p: 6 }}>
    <AirplanemodeActiveIcon sx={{ fontSize: '100px', mb: 4 }} />
    <Typography variant="h4" component="h4" sx={{ mb: 4 }}>
      Cordoba- Rio Janerio
    </Typography>
    <Typography variant="h4" component="h5" sx={{ mb: 2 }}>
      Clase
    </Typography>
    <Typography variant="p" component="p" sx={{ mb: 4 }}>
      clase VIP
    </Typography>
    <Typography variant="h4" component="h5" sx={{ mb: 2 }}>
      Fecha
    </Typography>
    <Typography variant="p" component="p" sx={{ mb: 4 }}>
      2 nov 2022 02:11:07
    </Typography>
    <Typography variant="h4" component="h5" sx={{ mb: 2 }}>
      Precio
    </Typography>
    <Typography variant="p" component="p" sx={{ fontSize: '80px' }}>
      $5000
    </Typography>
  </Paper>
);

export default VueloCompra;
