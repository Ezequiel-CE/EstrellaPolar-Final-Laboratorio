import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { LinearProgress, Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { verPasajero } from '../../api/metodos';
import { useApiContext } from '../../context/state';
import ListadoDePasajeros from './components/ListadoDePasajeros';

const TusPasajeros = () => {
  const { state } = useApiContext();
  const { auth } = state;

  const navigate = useNavigate();

  // query para todos los vuelos

  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, error } = useQuery({
    queryKey: ['vuelos', auth],
    queryFn: () => verPasajero(auth),
    enabled: !!auth,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  console.info(data);

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <>
        <Alert variant="filled" severity="error">
          No se encontraron resultados
        </Alert>
        <Button variant="contained" color="orange" onClick={() => navigate('/')}>
          volver a home
        </Button>
      </>
    );
  }

  return <ListadoDePasajeros data={data} />;
};

export default TusPasajeros;
