import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
