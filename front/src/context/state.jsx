import React, { createContext, useContext } from 'react';
import useAPIreducer from './reducer';

const apiContext = createContext();
const { Provider } = apiContext;

export const apiProvider = ({ children }) => {
  const [state, dispatch] = useAPIreducer({
    auth: {},
    vuelo: {},
  });

  const value = { state, dispatch };
  return <Provider value={value}>{children}</Provider>;
};

export const useApiContext = () => useContext(apiContext);
