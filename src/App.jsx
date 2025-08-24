
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
        element: <Onboarding />,
      },
      {
        path: '/jobs',
        element: <JobListing />,
      },
      {
        path: '/job/:id',
        element: <JobPage />,
      },
      {
        path: '/post-jobs',
        element: <PostJob />,
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />,
      },
      {
        path: '/my-jobs',
        element: <MyJobs />,
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
