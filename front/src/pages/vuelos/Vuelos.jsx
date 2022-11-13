import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Vuelo from './components/Vuelo';
// const dummyData = {
//   origen: 'buenos aires',
//   destino: 'brazil',
//   clase: ['premium', 'comercial'],
//   tiempo: '14-08-91',
//   precio: '$50000',
// };

function Vuelos() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],

    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>
        res.json(),
      ),
  });

  return (
    <div>
      <Vuelo />
    </div>
  );
}

export default Vuelos;
