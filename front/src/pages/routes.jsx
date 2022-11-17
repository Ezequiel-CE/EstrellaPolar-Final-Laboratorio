import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Layout2 from '../components/layout/Layout2';
import Home from './home/Home';
import Login from './login/Login';
import Vuelos from './vuelos/Vuelos';
import Pasaje from './pasaje/Pasaje';
import Asientos from './Asiento/Asientos';
import Informaciones from './informacion/Informacion';
import CompraPasaje from './compraPasaje/compraPasaje';
import Registro from './registrar/Registro';

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
        path: 'informacion',
        element: <Informaciones />,
      },
      {
        path: 'compraPasaje',
        element: <CompraPasaje />,
      },
      {
        path: 'asiento',
        element: <Asientos />,
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
