import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './style/global';

import { worker } from './mocks/worker';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TargetContextProvider } from './context/TargetContext';
if (process.env.NODE_ENV === 'development') {
  worker.start();
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TargetContextProvider>
        <GlobalStyle />
        <App />
      </TargetContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
