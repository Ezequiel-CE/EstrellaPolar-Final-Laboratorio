import React, { createContext, useContext } from 'react';
import useAPIreducer from './reducer';

const apiContext = createContext();
const { Provider } = apiContext;

// eslint-disable-next-line react/prop-types
export function ApiProvider({ children }) {
  const [state, dispatch] = useAPIreducer({
    auth: {},
    vuelo: null,
  });

  const selectVuelo = (data) => {
    dispatch({ type: 'select vuelo', payload: data });
  };

  const value = { state, dispatch, selectVuelo };
  return <Provider value={value}>{children}</Provider>;
}

export const useApiContext = () => useContext(apiContext);
