import { useReducer } from 'react';

// const VUELO = 'vuelo';
const AUTH = 'auth';

// eslint-disable-next-line consistent-return
const reducer = (state, action) => {
  switch (action.type) {
    case 'select vuelo':
      return { ...state, vuelo: action.payload };
    case 'select asiento':
      return { ...state, asiento: action.payload };
    case AUTH:
      break;
    default:
      return state;
  }
};

const useAPIreducer = (initialState) => useReducer(reducer, initialState);

export default useAPIreducer;
