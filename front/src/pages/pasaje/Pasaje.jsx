import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Alert, LinearProgress } from '@mui/material';
import { getPasajes } from '../../api/metodos';
import FormPasaje from './components/FormPasaje';
import ListadePasajes from './components/ListadePasajes';

function Pasaje() {
  const [pasaje, setPasaje] = useState(null);

  const { data, isFetching, error } = useQuery(['pasaje', pasaje], () => getPasajes(pasaje), {
    enabled: pasaje != null,
  });

  const encontrarPasaje = (infoPasaje) => {
    setPasaje({
      nombre: infoPasaje.nombre,
      apellido: infoPasaje.apellido,
      num_documento: infoPasaje.numero,
      tipo_documento: infoPasaje.tipo,
    });
  };

  if (isFetching) {
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

  if (data) {
    return <ListadePasajes pasajes={data} />;
  }
  return <FormPasaje encontrarPasaje={encontrarPasaje} />;
}

export default Pasaje;
