import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations';
import CampersList from '../../components/CampersList/CampersList';

const Catalog = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return <>{!loading && !error && <CampersList />}</>;
};

export default Catalog;
