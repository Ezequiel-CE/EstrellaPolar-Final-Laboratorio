import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from './home/Home';
import Login from './login/Login';
import Vuelos from './vuelos/Vuelos';
import Pasaje from './pasaje/Pasaje';

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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'vuelos',
        element: <Vuelos />,
      },
      {
        path: 'pasaje',
        element: <Pasaje />,
      },
    ],
  },
]);

export default router;
