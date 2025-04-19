import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// local imports
import { Calendar, ForgotPassword, Home, Login, Register, Settings, Tasks, Users } from '@/utils/Page.lazy';

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
    },
    {
      path: '/',
      element: (
        <Suspense>
          
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/tasks',
      element: (
        <Suspense>
           
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/users',
      element: (
        <Suspense>
          
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/calendar',
      element: (
        <Suspense>
           
          <ProtectedRoute>
            <Calendar />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/settings',
      element: (
        <Suspense>
       
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        </Suspense>
      ),
    },
  ];

  return useRoutes(routes);
};
