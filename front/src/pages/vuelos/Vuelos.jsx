import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Vuelo from './components/Vuelo';
import API from '../../api/api';
// const dummyData = {
//   origen: 'buenos aires',
//   destino: 'brazil',
//   clase: ['premium', 'comercial'],
//   tiempo: '14-08-91',
//   precio: '$50000',
// };

function Vuelos() {
  const { data } = useQuery(['vueloData'], () => API.get('itinerario/vuelos').then((res) => res.data));

  console.info(data);

  return (
    <div>
      <Vuelo />
    </div>
  );
}

export default Vuelos;
