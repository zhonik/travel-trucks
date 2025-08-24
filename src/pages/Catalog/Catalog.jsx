import { useDispatch, useSelector } from 'react-redux';
import CampersList from '../../components/CampersList/CampersList';
import FiltersSection from '../../components/FiltersSection/FiltersSection';
import s from './Catalog.module.css';
import { selectFilters } from '../../redux/filters/selectors';
import { selectCampers } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { clearCampers } from '../../redux/campers/slice';
import { fetchCampers } from '../../redux/campers/operations';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const filters = useSelector(selectFilters);
  const { items, page, limit, total, isLoading, error } = useSelector(selectCampers);
  const hasMore = items.length < total;

  useEffect(() => {
    const filters = {
      location: searchParams.get('location') || '',
      form: searchParams.get('form') || '',
      transmission: searchParams.get('transmission') || '',
      features: searchParams.getAll('features'),
    };
    dispatch(fetchCampers({ filters, page: 1, limit }));
  }, [dispatch, limit, searchParams]);

  const handleLoadMore = () => {
    dispatch(fetchCampers({ filters, page: page + 1, limit }));
  };

  const handleSearch = filters => {
    dispatch(clearCampers());
    dispatch(fetchCampers({ filters, page: 1, limit }));
  };

  return (
    <div className={s.container}>
      {isLoading && <Loader />}
      <FiltersSection onSearch={handleSearch} />

      {items.length ? (
        <div className={s.camperListWrapp}>
          {!isLoading && !error && <CampersList />}
          {hasMore && !isLoading && <Button isLoading={isLoading} onClick={handleLoadMore} />}
        </div>
      ) : (
        !isLoading && <div className={s.noCamper}>No campers found</div>
      )}
    </div>
  );
};

export default Catalog;
