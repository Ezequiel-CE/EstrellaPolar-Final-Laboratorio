/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Stack, LinearProgress, Alert } from '@mui/material';
import Vuelo from './components/Vuelo';
import FindFlight from './components/FindFlight';

import { conseguirVuelos } from '../../api/metodos';

const Vuelos = () => {
  const { data, isLoading, error } = useQuery(['vueloData'], conseguirVuelos);
  // eslint-disable-next-line function-paren-newline

  let VueloList = '';

  if (isLoading) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="filled" severity="error">
        algo paso
      </Alert>
    );
  }

  if (!isLoading) {
    VueloList = data.map((vuelo) => <Vuelo key={vuelo.id} vuelo={vuelo} />);
  }

  return (
    <Stack spacing={1}>
      <FindFlight />
      {VueloList}
    </Stack>
  );
};

export default Vuelos;
