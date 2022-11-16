import React, { createContext, useContext } from 'react';
import useAPIreducer from './reducer';

const apiContext = createContext();
const { Provider } = apiContext;

// eslint-disable-next-line react/prop-types
export function ApiProvider({ children }) {
  const [state, dispatch] = useAPIreducer({
    auth: {},
    asiento: 'A14',
    vuelo: null,
  });

  const selectVuelo = (data) => {
    dispatch({ type: 'select vuelo', payload: data });
  };
  const selectAsiento = (data) => {
    dispatch({ type: 'select asiento', payload: data });
  };

  const value = { state, dispatch, selectVuelo, selectAsiento };
  return <Provider value={value}>{children}</Provider>;
}

export const useApiContext = () => useContext(apiContext);
