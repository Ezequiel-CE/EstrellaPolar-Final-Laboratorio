import React from 'react';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import router from './pages/routes';

import { ApiProvider } from './context/state';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen />
      </ApiProvider>
    </QueryClientProvider>
  );
}

export default App;
