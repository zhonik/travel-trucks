import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectItems } from '../../redux/campers/selectors';
import CamperItem from '../CamperItem/CamperItem';
import s from './CampersList.module.css';

const CampersList = () => {
  const loading = useSelector(selectIsLoading);
  const items = useSelector(selectItems);
  const error = useSelector(selectError);

  return (
    <div className={s.wrapper}>
      <h1>Catalog Page</h1>
      <ul>
        {items.map(camper => (
          <li key={camper.id}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
