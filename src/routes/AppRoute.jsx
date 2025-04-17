import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// local imports
import {   ForgotPassword, Home, Login, Register } from '@/utils/Page.lazy';

const ProtectedRoute = lazy(() => import('./ProtectedRoute'));

export const AppRoutes = () => {
  const routes = [
    {
      path: '/login',
      element: (
        <Suspense>
          <Login />
        </Suspense>
      ),
    },
    {
      path: '/register',
      element: (
        <Suspense>
          <Register />
        </Suspense>
      ),
    },
    {
      path: '/forgot-password',
      element: (
        <Suspense>
          <ForgotPassword />
        </Suspense>
      ),
    },{
        path: "/",
        element: <Suspense><Home /></Suspense>
    },
   
  ];

  return useRoutes(routes);
};
