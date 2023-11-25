import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer/Footer.tsx';
import GrupoEstudo from './components/GrupoEstudo/GrupoEstudo.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <QueryClientProvider client={queryClient}>
      <GrupoEstudo />
      <Footer />
    </QueryClientProvider>
  </React.StrictMode>,
)
