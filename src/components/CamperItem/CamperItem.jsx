import clsx from 'clsx';
import s from './CamperItem.module.css';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../helpers/formatPrice';
import { capitalize } from '../../helpers/capitalize';
import { formattedLocation } from '../../helpers/formattedLocation';

const CamperItem = ({ camper }) => {
  const {
    id,
    AC,
    TV,
    bathroom,
    description,
    engine,
    gallery,
    gas,
    kitchen,
    location,
    microwave,
    name,
    price,
    radio,
    rating,
    refrigerator,
    reviews,
    transmission,
    water,
  } = camper;

  return (
    <li>
      <div className={s.content}>
        <div className={s.card}>
          <img
            src={gallery[0].original}
            alt='Camper'
            className={s.cardImage}
            width='292'
            height='320'
          />
          <div className={s.cardInfo}>
            <div className={s.cardHeaderWrapp}>
              <div className={s.cardHeader}>
                <h2 className={s.camperName}>{name}</h2>
                <div className={s.priceAndFavoriteWrapp}>
                  <span className={s.price}>€{formatPrice(price)}</span>
                  <button className={s.favoriteBtn} type='button'>
                    <svg className={s.favoriteIcon} width={24} height={21}>
                      <use href='/icons.svg#icon-heart-default'></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={s.reviewsAndLocationWrapp}>
                <p className={s.reviews}>
                  <svg
                    className={clsx(s.reviewsIcon, reviews.length === 0 && s.reviewsIconDefault)}
                    width={16}
                    height={16}
                  >
                    <use href='/icons.svg#icon-star-yellow'></use>
                  </svg>
                  {rating} ({reviews.length} Reviews)
                </p>
                <p className={s.location}>
                  <svg className={s.equipmentIcon} width={20} height={20}>
                    <use href='/icons.svg#icon-map'></use>
                  </svg>
                  {formattedLocation(location)}
                </p>
              </div>
            </div>

            <p className={s.description}>{description}</p>
            <ul className={s.equipmentList}>
              {AC && (
                <li className={s.equipmentItem}>
                  <svg className={s.equipmentIcon} width={20} height={20}>
                    <use href='/icons.svg#icon-wind'></use>
                  </svg>
                  AC
                </li>
              )}

              <li className={s.equipmentItem}>
                <svg className={s.equipmentIcon} width={20} height={20}>
                  <use href='/icons.svg#icon-diagram'></use>
                </svg>
                {transmission === 'automatic' ? 'Automatic' : 'Manual'}
              </li>

              <li className={s.equipmentItem}>
                <svg className={s.equipmentIcon} width={20} height={20}>
                  <use href='/icons.svg#icon-fuel-pump'></use>
                </svg>
                {capitalize(engine)}
              </li>
              {kitchen && (
                <li className={s.equipmentItem}>
                  <svg className={s.equipmentIcon} width={20} height={20}>
                    <use href='/icons.svg#icon-cup-hot'></use>
                  </svg>
                  Kitchen
                </li>
              )}
              {TV && (
                <li className={s.equipmentItem}>
                  <svg className={s.equipmentIcon} width={20} height={20}>
                    <use href='/icons.svg#icon-tv'></use>
                  </svg>
                  TV
                </li>
              )}
              {bathroom && (
                <li className={s.equipmentItem}>
                  <svg className={s.equipmentIcon} width={20} height={20}>
                    <use href='/icons.svg#icon-shower'></use>
                  </svg>
                  Bathroom
                </li>
              )}
              {microwave && (
                <li className={s.equipmentItem}>
                  <svg className={clsx(s.equipmentIcon, s.clearFill)} width={20} height={20}>
                    <use href='/icons.svg#icon-microwave'></use>
                  </svg>
                  Microwave
                </li>
              )}
              {gas && (
                <li className={s.equipmentItem}>
                  <svg className={clsx(s.equipmentIcon, s.clearFill)} width={20} height={20}>
                    <use href='/icons.svg#icon-gas-stove'></use>
                  </svg>
                  Gas
                </li>
              )}
              {water && (
                <li className={s.equipmentItem}>
                  <svg className={clsx(s.equipmentIcon, s.clearFill)} width={20} height={20}>
                    <use href='/icons.svg#icon-water-outline'></use>
                  </svg>
                  Water
                </li>
              )}
              {radio && (
                <li className={s.equipmentItem}>
                  <svg className={s.equipmentIcon} width={20} height={20}>
                    <use href='/icons.svg#icon-radios'></use>
                  </svg>
                  Radio
                </li>
              )}
              {refrigerator && (
                <li className={s.equipmentItem}>
                  <svg className={s.equipmentIcon} width={20} height={20}>
                    <use href='/icons.svg#icon-fridge-outline'></use>
                  </svg>
                  Refrigerator
                </li>
              )}
            </ul>
            <Link to={`/catalog/${id}`} className={s.button}>
              Show more
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CamperItem;
