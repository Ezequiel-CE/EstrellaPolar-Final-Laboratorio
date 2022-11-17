import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from './home/Home';
import Login from './login/Login';
import Vuelos from './vuelos/Vuelos';
import Pasaje from './pasaje/Pasaje';
<<<<<<< HEAD
import VuelosAdm from './vuelosAdm/VuelosAdm';

=======
>>>>>>> 176a54d0be4b5bbae73d76e8fafd9dc8c1fb8d76
import CompraPasaje from './compraPasaje/compraPasaje';
import Registro from './registrar/Registro';
import Datos from './Datos/Datos';
import Asientos from './Asiento/Asientos';
import { VueloAdm } from './vuelosAdm/VueloAdm';

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
        path: 'compraPasaje',
        element: <CompraPasaje />,
      },
      {
        path: 'datos',
        element: <Datos />,
      },
      {
        path: 'vuelosADM',
        element: <VueloAdm />,
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
