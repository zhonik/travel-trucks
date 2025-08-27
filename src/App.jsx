import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CamperFeatures from './components/CamperFeatures/CamperFeatures';
import CamperReviews from './components/CamperReviews/CamperReviews';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<CamperDetailsPage />}>
            <Route index element={<Navigate to='features' replace />} />
            <Route path='features' element={<CamperFeatures />} />
            <Route path='reviews' element={<CamperReviews />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
};

export default App;
