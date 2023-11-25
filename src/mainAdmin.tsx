import React from 'react'
import ReactDOM from 'react-dom/client'
import CrudMonitoria from './crudMonitoria.tsx'
import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderAdmin />
    <QueryClientProvider client={queryClient}>
     <CrudMonitoria />
    </QueryClientProvider>
  </React.StrictMode>,
)
