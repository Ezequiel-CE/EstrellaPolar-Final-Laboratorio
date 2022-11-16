import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Persona from './conponent/persona';
import VueloCompra from './conponent/VueloCompra';
import ComoPaga from './conponent/ComoPaga';
import Datos from './conponent/datos';

function CompraPasaje() {
  const [checkbox, setCheckbox] = React.useState('credito');

  const handleChange = (event) => {
    setCheckbox(event.target.value);
  };

  return (

    <Grid container spacing={5}>
      <Grid item xs={6}>
        <Typography variant="h4" component="h4" textAlign="center" sx={{ mb: 4 }}>
          Quienes viajan?
        </Typography>
        <Persona />
        <Typography variant="h4" component="h4" textAlign="center" sx={{ mt: 4, mb: 4 }}>
          Como Pagas?
        </Typography>
        <ComoPaga handleChange={handleChange} value={checkbox} />
        <Typography variant="h4" component="h4" textAlign="center" sx={{ mt: 4, mb: 4 }}>
          Datos de la Tarjeta
        </Typography>
        <Datos />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4" component="h4" textAlign="center" sx={{ mb: 4 }}>
          Vuelo Escogido
        </Typography>
        <VueloCompra />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: 'flex',
          justifyContent: 'center',
          alignItems: 'center' }}
      >

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#F96D00',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ShoppingCartIcon />
          Comprar
        </Button>

      </Grid>
    </Grid>

  );
}

export default CompraPasaje;
