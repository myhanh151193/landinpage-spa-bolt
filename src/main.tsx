import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AdminMain from './AdminMain';
import { AppProvider } from './context/AppContext';
import './index.css';

// Check if we're on admin route
const isAdminRoute = window.location.pathname.startsWith('/admin');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      {isAdminRoute ? <AdminMain /> : <App />}
    </AppProvider>
  </StrictMode>
);
