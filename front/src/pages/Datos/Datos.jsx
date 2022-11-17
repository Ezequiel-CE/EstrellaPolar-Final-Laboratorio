import React from 'react';
import { Grid, Card, Box, Typography } from '@mui/material';
import Formulario from './components/Formulario';

const Datos = () => (
  <Grid container>
    <Grid xs display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{
          px: '35px',
          borderRadius: '30px',
          backgroundColor: 'white',
          boxShadow:
            '200px 132px 96px rgba(0, 0, 0, 0.01), 113px 74px 81px rgba(0, 0, 0, 0.05), 50px 33px 60px rgba(0, 0, 0, 0.09), 13px 8px 33px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            marginTop: 4,
          }}
        >
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h4">Agrega tus datos</Typography>
          </Grid>
        </Box>

        <Formulario />
      </Card>
    </Grid>
  </Grid>
);

export default Datos;
