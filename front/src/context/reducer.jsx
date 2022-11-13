import { useReducer } from 'react';

const VUELO = 'vuelo';
const AUTH = 'auth';

const reducer = (state, action) => {
  switch (action.type) {
    case VUELO:
      break;
    case AUTH:
      break;
    default:
      break;
  }
};

const useAPIreducer = (initialState) => useReducer(reducer, initialState);

export default useAPIreducer;
