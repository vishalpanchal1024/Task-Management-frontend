import React from 'react';
import Home from '@/pages/Home';
import Register from './pages/Auth/Register';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
