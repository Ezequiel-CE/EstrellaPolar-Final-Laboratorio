/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Grid, Typography, LinearProgress, Button } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Asiento from './components/asiento';
import { useApiContext } from '../../context/state';
import { getAsientos } from '../../api/metodos';
/* http://localhost:5000/API/avion/asientos
realizar get api.post(avion/asiento,body)
{
  "v": 1,
  "a": 3,
  "clase": "vip"
}
paso hookquery + key + request recibo 3 estados data loading y error y
hacer condiciones en base a eso
Leer Docu Tanstack Query
Mutaciones
*/

const Asientos = (props) => {
  const { state } = useApiContext();
  const { vuelo } = state;
  const { avions } = vuelo.vuelo;
  const a = avions[0].id;
  const v = vuelo.vuelo.id;
  const clase = vuelo.pasajeEscogido.categoria;

  const { pasajeComprado } = props;
  const params = { v, a, clase };
  const { data, isLoading, error } = useQuery({
    queryKey: ['asientos', params],
    queryFn: () => getAsientos(params),
    // enabled: !!params,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  let asientosList;
  if (!isLoading) {
    asientosList = data.asientos.map((asiento, index) => (
      <Asiento key={index} asiento={asiento} pasaje={pasajeComprado} />
    ));
  }
  if (isLoading) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  return (
    <Container
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h3" component="h2" sx={{ m: 5, textAlign: 'center' }}>
        Seleccion de asiento
      </Typography>
      <Typography variant="h6" sx={{ m: 5, textAlign: 'center' }}>
        {' '}
        Tu asiento: {pasajeComprado.placa}{' '}
      </Typography>
      <Grid
        container
        spacing={1}
        columns={{ xs: 10, md: 20 }}
        justifyContent="center"
        alignItems="center"
        sx={{ borderBottom: 1, borderTop: 1, pb: 1 }}
      >
        {asientosList}
      </Grid>
      <Grid container columns={{ xs: 10, md: 20 }} justifyContent="center" alignItems="center">
        <Grid item x={1} md={4}>
          <Button
            variant="contained"
            sx={{
              m: 2,
              backgroundColor: '#F96D00',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Cambiar
          </Button>
        </Grid>
        <Grid item x={1} md={4}>
          <Button
            variant="contained"
            sx={{
              m: 2,
              backgroundColor: '#F96D00',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Quedarse con el asiento actual
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Asientos;
