import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import Layout from '../Layout';
import Home from '../../pages/Home';
import Catalog from '../../pages/Catalog';
import CamperDetails from '../../pages/CamperDetails';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:id' element={<CamperDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
