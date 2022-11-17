import { useReducer } from 'react';

// eslint-disable-next-line consistent-return
const reducer = (state, action) => {
  switch (action.type) {
    case 'select vuelo':
      return { ...state, vuelo: action.payload };
    case 'select asiento':
      return { ...state, asientoSeleccionado: action.payload };
    case 'add token':
      return { ...state, auth: action.payload };

    default:
      return state;
  }
};

const useAPIreducer = (initialState) => useReducer(reducer, initialState);

export default useAPIreducer;
