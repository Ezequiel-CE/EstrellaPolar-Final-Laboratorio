/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, LinearProgress, Button } from '@mui/material';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import Asiento from './components/asiento';
import { useApiContext } from '../../context/state';
import { getAsientos, editarAsiento } from '../../api/metodos';
import FinalizacionDialog from './components/DialogCompra';

const Asientos = (props) => {
  const { state } = useApiContext();
  const { vuelo } = state;
  const { avions } = vuelo.vuelo;
  const navigate = useNavigate();

  const a = avions[0].id;
  const v = vuelo.vuelo.id;
  const clase = vuelo.pasajeEscogido.categoria;
  const [open, setOpen] = useState(false);

  const { pasajeComprado } = props;

  const params = { v, a, clase };
  const { data, isLoading, error } = useQuery({
    queryKey: ['asientos', params],
    queryFn: () => getAsientos(params),
    // enabled: !!params,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const mutation = useMutation({
    mutationFn: (dataAsiento) => editarAsiento(dataAsiento),
  });

  let asientosList;
  if (!isLoading) {
    asientosList = data.asientos.map((asiento, index) => (
      <Asiento key={index} asiento={asiento} aseleccionado={pasajeComprado} />
    ));
  }
  if (isLoading) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  const finalizar = (type) => {
    setOpen(!open);
    switch (type) {
      case 'conservar':
        console.info('conservar');
        break;
      case 'cambiar':
        console.info('cambiar');
        mutation.mutate({
          asiento: state.asientoSeleccionado,
          pasajeroCompraPasajeId: pasajeComprado.compraId,
        });

        break;
      default:
        break;
    }
  };

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
        {!state.asientoSeleccionado
          ? `Tu asiento es: ${pasajeComprado.placa}`
          : `Cambiar tu asiento: ${pasajeComprado.placa} por ${state.asientoSeleccionado}`}
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
            onClick={() => finalizar('cambiar')}
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
            onClick={() => finalizar('conservar')}
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
      <FinalizacionDialog open={open} finalizar={finalizar} navigateHome={navigateHome} />
    </Container>
  );
};

export default Asientos;
