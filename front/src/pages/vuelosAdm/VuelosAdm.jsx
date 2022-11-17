/* eslint-disable no-unused-vars */
import React from 'react';
import { Stack, LinearProgress, Typography } from '@mui/material';

import { useQuery } from '@tanstack/react-query';
import VueloAdm from './components/VueloAdm';
import { conseguirVuelos } from '../../api/metodos';

const VuelosAdm = () => {
  const { data, isLoading, error } = useQuery(['vuelos'], conseguirVuelos);

  if (isLoading) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }
  let VueloList;
  if (!isLoading) {
    VueloList = data.map((vuelo) => <VueloAdm key={vuelo.id} vuelo={vuelo} />);
  }

  return (
    <Stack spacing={1}>
      <Typography variant="h2" component="h2">
        Listado de pasajeros
      </Typography>
      {VueloList}
    </Stack>
  );
};

export default VuelosAdm;
