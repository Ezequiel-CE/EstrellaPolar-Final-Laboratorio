import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Layout2 from '../components/layout/Layout2';
import Home from './home/Home';
import Login from './login/Login';
import Vuelos from './vuelos/Vuelos';
import Pasaje from './pasaje/Pasaje';
import VuelosAdm from './vuelosAdm/VuelosAdm';

import CompraPasaje from './compraPasaje/compraPasaje';
import Registro from './registrar/Registro';

import TusPasajeros from './TusPasajeros/TusPasajeros';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout2 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'vuelos',
        element: <Vuelos />,
      },
      {
        path: 'pasaje',
        element: <Pasaje />,
      },

      {
        path: 'compraPasaje',
        element: <CompraPasaje />,
      },
      {
        path: 'pasajeros',
        element: <TusPasajeros />,
      },
      {
        path: 'vuelosADM',
        element: <VuelosAdm />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  {
    path: 'register',
    element: <Registro />,
  },
]);

export default router;
