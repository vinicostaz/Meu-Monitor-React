import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GrupoEstudoAdmin from './components/GrupoEstudoAdmin/GrupoEstudoAdmin.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HeaderAdmin />
      <GrupoEstudoAdmin />
    </QueryClientProvider>
  </React.StrictMode>,
)
