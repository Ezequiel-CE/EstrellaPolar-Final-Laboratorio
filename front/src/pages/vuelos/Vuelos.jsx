/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Stack, LinearProgress, Alert, Button } from '@mui/material';
import Vuelo from './components/Vuelo';
import FindFlight from './components/FindFlight';
import { conseguirVuelos } from '../../api/metodos';
import CompraPasaje from '../compraPasaje/compraPasaje';
import { useApiContext } from '../../context/state';

const Vuelos = () => {
  const [params, setParams] = useState({ origen: '', destino: '', fecha: '' });
  // setParams({ origen: 'argentina', destino: 'brasil' });

  const { data, isLoading, error } = useQuery({
    queryKey: ['vuelos', params],
    queryFn: () => conseguirVuelos(params),
    enabled: !!params,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const agregarParams = (objParams) => {
    setParams(objParams);
  };
  // eslint-disable-next-line function-paren-newline
  const vueloSeleccionado = useApiContext().state.vuelo;

  let VueloList = '';

  if (vueloSeleccionado) {
    return <CompraPasaje />;
  }

  if (isLoading) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <Alert variant="filled" severity="error">
          No se encontraron resultados
        </Alert>
        <Button
          variant="contained"
          color="orange"
          onClick={() => setParams({ origen: '', destino: '', fecha: '' })}
        >
          intentar de nuevo
        </Button>
      </>
    );
  }

  if (!isLoading) {
    VueloList = data.map((vuelo) => (
      <Vuelo key={vuelo.id} vuelo={vuelo} />
    ));
  }

  return (
    <Stack spacing={1}>
      <FindFlight agregarParams={agregarParams} vuelo={data} />
      {VueloList}
    </Stack>
  );
};

export default Vuelos;
