import React, { createContext, useContext, useState } from 'react';
import useAPIreducer from './reducer';

const apiContext = createContext();
const { Provider } = apiContext;

// eslint-disable-next-line react/prop-types
export function ApiProvider({ children }) {
  const [state, dispatch] = useAPIreducer({
    auth: {},
    vuelo: null,
  });

  const [pasaje, setPasaje] = useState(null);

  const selectVuelo = (data) => {
    dispatch({ type: 'select vuelo', payload: data });
  };

  const selectPasaje = (data) => {
    setPasaje(data);
  };

  const value = { state, dispatch, selectVuelo, selectPasaje, pasaje };
  return <Provider value={value}>{children}</Provider>;
}

export const useApiContext = () => useContext(apiContext);
