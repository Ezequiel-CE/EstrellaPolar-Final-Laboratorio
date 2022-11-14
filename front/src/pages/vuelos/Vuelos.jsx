/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Stack } from '@mui/material';
import Vuelo from './components/Vuelo';
import API from '../../api/api';

const Vuelos = () => {
  const { data, isLoading } = useQuery(
    ['vueloData'],
    () =>
      API.get('itinerario/vuelos', {
        responseType: 'json',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.data.resp),
    // eslint-disable-next-line function-paren-newline
  );

  let VueloList = '';
  if (!isLoading) {
    VueloList = data.map((vuelo) => <Vuelo key={vuelo.id} vuelo={vuelo} />);
  }

  return <Stack spacing={1}>{VueloList}</Stack>;
};

export default Vuelos;
