import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import s from './CampersList.module.css';
import { selectItems } from '../../redux/campers/selectors';

const CampersList = () => {
  const items = useSelector(selectItems);

  return (
    <div className={s.wrapper}>
      <ul className={s.campersList}>
        {items.length && items.map(camper => <CamperItem key={camper.id} camper={camper} />)}
      </ul>
    </div>
  );
};

export default CampersList;
