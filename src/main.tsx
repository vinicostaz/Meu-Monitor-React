import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './components/Header/Header.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer/Footer.tsx';
import Monitoria from './components/Monitoria/Monitoria.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <QueryClientProvider client={queryClient}>
     <App />
      <Monitoria />
      <Footer />
    </QueryClientProvider>
  </React.StrictMode>,
)
