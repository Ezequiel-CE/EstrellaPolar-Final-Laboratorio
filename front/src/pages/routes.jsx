import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from './home/Home';
import Login from './login/Login';
import Vuelos from './vuelos/Vuelos';

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
    ],
  },
  //   {
  //     path: '/login',
  //     element: <Login />,
  //   },
  {
    path: '/vuelos',
    element: <Vuelos />,
  },
]);

export default router;
