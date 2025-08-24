import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <div className={s.notFoundTitle}>Oops! We can&apos;t find that page</div>;
};

export default NotFoundPage;
