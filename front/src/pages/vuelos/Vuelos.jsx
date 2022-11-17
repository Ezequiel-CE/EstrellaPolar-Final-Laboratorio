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
  const { setPasaje } = useApiContext();

  const queryCliente = useQueryClient();
  // query para todos los vuelos

  const vueloSeleccionado = useApiContext().state.vuelo;
  const { setPasaje } = useApiContext();

  const queryCliente = useQueryClient();
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
    onSuccess: () => {
      queryCliente.invalidateQueries('vuelos');
    },
  });

  // agregar parametros a la query en el buscador

  const agregarParams = (objParams) => {
    setParams(objParams);
  };

  // render condicional del matation

  if (mutation.isLoading) {
    return (
      <>
        <h1> comprando el pasaje</h1>
        <LinearProgress />
      </>
    );
  }

  // cuando se compra renderiza los asientos

  if (mutation.isSuccess) {
    const formatedAsiento = {
      placa: mutation.data.asiento.placa,
      clase: mutation.data.asiento.clase,
      permitido: true,
      info: {
        estado: 'ocupado',
        pasajero: `${mutation.data.pasajero.nombre} ${mutation.data.pasajero.apellido}`,
      },
    };
    return <Asientos pasajeComprado={formatedAsiento} />;
  }

  // eslint-disable-next-line function-paren-newline

  let VueloList = '';

  // render condicional para mostrar formulario de compra

  if (vueloSeleccionado) {
    return <CompraPasaje mutation={mutation} />;
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
