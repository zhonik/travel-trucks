import s from './CamperFeatures.module.css';

import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campers/selectors';
import { capitalize } from '../../helpers/capitalize';
import clsx from 'clsx';

const CamperFeatures = () => {
  const camper = useSelector(selectCamper) || {};

  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  return (
    <div className={s.featuresContainer}>
      <ul className={s.equipmentList}>
        <li className={s.equipmentItem}>
          <svg className={s.equipmentIcon} width={20} height={20}>
            <use href='/src/assets/icons.svg#icon-diagram'></use>
          </svg>
          {transmission === 'automatic' ? 'Automatic' : 'Manual'}
        </li>
        <li className={s.equipmentItem}>
          <svg className={s.equipmentIcon} width={20} height={20}>
            <use href='/src/assets/icons.svg#icon-fuel-pump'></use>
          </svg>
          {capitalize(engine)}
        </li>
        {AC && (
          <li className={s.equipmentItem}>
            <svg className={s.equipmentIcon} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-wind'></use>
            </svg>
            AC
          </li>
        )}
        {TV && (
          <li className={s.equipmentItem}>
            <svg className={s.equipmentIcon} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-tv'></use>
            </svg>
            TV
          </li>
        )}
        {bathroom && (
          <li className={s.equipmentItem}>
            <svg className={s.equipmentIcon} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-shower'></use>
            </svg>
            Bathroom
          </li>
        )}

        {refrigerator && (
          <li className={s.equipmentItem}>
            <svg className={s.equipmentIcon} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-fridge-outline'></use>
            </svg>
            Refrigerator
          </li>
        )}
        {microwave && (
          <li className={s.equipmentItem}>
            <svg className={clsx(s.equipmentIcon, s.clearFill)} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-microwave'></use>
            </svg>
            Microwave
          </li>
        )}
        {kitchen && (
          <li className={s.equipmentItem}>
            <svg className={s.equipmentIcon} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-cup-hot'></use>
            </svg>
            Kitchen
          </li>
        )}
        {water && (
          <li className={s.equipmentItem}>
            <svg className={clsx(s.equipmentIcon, s.clearFill)} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-water-outline'></use>
            </svg>
            Water
          </li>
        )}
        {radio && (
          <li className={s.equipmentItem}>
            <svg className={s.equipmentIcon} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-radios'></use>
            </svg>
            Radio
          </li>
        )}
        {gas && (
          <li className={s.equipmentItem}>
            <svg className={clsx(s.equipmentIcon, s.clearFill)} width={20} height={20}>
              <use href='/src/assets/icons.svg#icon-gas-stove'></use>
            </svg>
            Gas
          </li>
        )}
      </ul>

      <div className={s.detailsContainer}>
        <h3 className={s.detailsTitle}>Vehicle details</h3>
        <div className={s.stroke}></div>
        <div>
          <ul className={s.detailsList}>
            <li className={s.detailsItem}>
              <p>Form</p>
              <p>{capitalize(form)}</p>
            </li>
            <li className={s.detailsItem}>
              <p>Length</p>
              <p>{length}</p>
            </li>
            <li className={s.detailsItem}>
              <p>Width</p>
              <p>{width}</p>
            </li>
            <li className={s.detailsItem}>
              <p>Height</p>
              <p>{height}</p>
            </li>
            <li className={s.detailsItem}>
              <p>Tank</p>
              <p>{tank}</p>
            </li>
            <li className={s.detailsItem}>
              <p>Consumption</p>
              <p>{consumption}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
