import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer/Footer.tsx';
import CatalogoVideos from './components/CatalogoVideos/CatalogoVideos.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <QueryClientProvider client={queryClient}>
      <CatalogoVideos />
      <Footer />
    </QueryClientProvider>
  </React.StrictMode>,
)
