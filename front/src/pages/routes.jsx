import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from './home/Home';
import Login from './login/Login';
import Vuelos from './vuelos/Vuelos';
import Pasaje from './pasaje/Pasaje';
import Informaciones from './informacion/Informacion';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
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
    ],
  },
  { path: '/login', element: <Login /> },
]);

export default router;
