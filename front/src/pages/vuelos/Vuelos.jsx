/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Stack, LinearProgress, Alert, Button } from '@mui/material';
import Vuelo from './components/Vuelo';
import FindFlight from './components/FindFlight';
import { conseguirVuelos, comprarPasaje } from '../../api/metodos';
import CompraPasaje from '../compraPasaje/compraPasaje';
import { useApiContext } from '../../context/state';
import Asientos from '../Asiento/Asientos';

const Vuelos = () => {
  const [params, setParams] = useState({ origen: '', destino: '', fecha: '' });

  const vueloSeleccionado = useApiContext().state.vuelo;
  const { selectPasaje, pasaje } = useApiContext();

  // query para todos los vuelos

  const { data, isLoading, error } = useQuery({
    queryKey: ['vuelos', params],
    queryFn: () => conseguirVuelos(params),
    enabled: !!params,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  // query para comprar pasaje
  const mutation = useMutation({
    mutationFn: (dataForm) => comprarPasaje(dataForm),
  });

  // agregar parametros a la query en el buscador

  const agregarParams = (objParams) => {
    setParams(objParams);
  };

  // render condicional del matation

  if (mutation.isLoading) {
    return <h1> comprando el pasaje</h1>;
  }

  if (mutation.isSuccess) {
    selectPasaje(mutation.data);
    return <Asientos />;
  }

  // eslint-disable-next-line function-paren-newline

  let VueloList = '';

  // render condicional para mostrar formulario de compra

  if (vueloSeleccionado && !pasaje) {
    return <CompraPasaje mutation={mutation} />;
  }

  if (isLoading && !pasaje) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  if (error && !pasaje) {
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
    VueloList = data.map((vuelo) => <Vuelo key={vuelo.id} vuelo={vuelo} />);
  }

  // listado de vuelo

  return (
    <Stack spacing={1}>
      <FindFlight agregarParams={agregarParams} vuelo={data} />
      {VueloList}
    </Stack>
  );
};

export default Vuelos;
