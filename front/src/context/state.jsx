import React, { createContext, useContext, useState } from 'react';
import useAPIreducer from './reducer';

const apiContext = createContext();
const { Provider } = apiContext;

// eslint-disable-next-line react/prop-types
export function ApiProvider({ children }) {
  // const asd = {
  //   asiento: {
  //     placa: 'B63',
  //     clase: 'comercial',
  //     permitido: true,
  //     info: {
  //       estado: 'libre',
  //     },
  //   },

  //   pasajero: {
  //     id: 82,
  //     nombre: 'Marcelo',
  //     apellido: 'Cabral',
  //     tipo_documento: 'dni',
  //     num_documento: 37745845,
  //     fecha_nacimiento: '2222-02-06',
  //     telefono: 3804233730,
  //     direccion: 'Coronel Lagos 427',
  //     email: 'caritaxd79@gmail.com',
  //   },
  // };

  const [pasaje, setPasaje] = useState(null);
  const [state, dispatch] = useAPIreducer({
    auth: {},
    pasajeSeleccionado: null,
    vuelo: null,
  });

  const selectVuelo = (data) => {
    dispatch({ type: 'select vuelo', payload: data });
  };
  const selectAsiento = (data) => {
    dispatch({ type: 'select asiento', payload: data });
  };

  const selectPasaje = (data) => {
    setPasaje(data);
  };

  const guardarToken = (data) => {
    dispatch({ type: 'add token', payload: data });
  };

  const value = { state, dispatch, selectVuelo, selectPasaje, pasaje, selectAsiento, guardarToken };
  return <Provider value={value}>{children}</Provider>;
}

export const useApiContext = () => useContext(apiContext);
