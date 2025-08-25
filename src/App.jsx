
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import LandingPage from '@/pages/Landing'
import AppLayout from '@/layouts/AppLayout'
import Onboarding from '@/pages/Onboarding'
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import SavedJobs from './pages/Saved-job';
import MyJobs from './pages/my-jobs';
import PostJob from './pages/Post-job';
import { ThemeProvider } from './components/theme-provider';

import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/onboarding',
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: '/jobs',
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job/:id',
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/post-jobs',
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: '/saved-jobs',
        element: (
          <ProtectedRoute>
            <SavedJobs/>
          </ProtectedRoute>
        ),
      },
      {
        path: '/my-jobs',
        element: (
          <ProtectedRoute>
            <MyJobs/>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
