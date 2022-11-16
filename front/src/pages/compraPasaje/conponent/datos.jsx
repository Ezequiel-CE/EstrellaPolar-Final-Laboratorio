import * as React from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';

function Datos() {
  return (
    <Grid
      sx={{
        backgroundColor: '#F3F3F3',
      }}
    >
      <h3> INGRESA DATOS DE LA TARJETA</h3>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            id="Numero"
            label="Numero de Tarjeta"
            name="Numero"
            autoComplete="Nombre"
          />
        </Box>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            id="codigo"
            label="Codigo"
            name="Apellido"
            autoComplete="Apellido"
          />
        </Box>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <formControl>
            <TextField
              margin="normal"
              id="date"
              label="Fecha de Vencimiento"
              type="date"
              defaultValue="1960-01-01"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </formControl>
        </Box>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            id="numeroDocumento"
            label="Numero documento"
            name="numeroDocumento"
            autoComplete="numeroDocumento"
          />
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Button type="submit" variant="contained" size="large" sx={{ mt: 3, mb: 2 }}>
              COMPRAR
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Datos;
