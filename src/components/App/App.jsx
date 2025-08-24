import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import Catalog from '../../pages/Catalog/Catalog';
import CamperDetails from '../../pages/CamperDetails/CamperDetails';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import CamperFeatures from '../CamperFeatures/CamperFeatures';
import CamperReviews from '../CamperReviews/CamperReviews';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<CamperDetails />}>
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
