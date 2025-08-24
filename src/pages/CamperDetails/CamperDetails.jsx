import { NavLink, Outlet, useParams } from 'react-router-dom';
import s from './CamperDetails.module.css';
import clsx from 'clsx';
import FormBooking from '../../components/FormBooking/FormBooking';
import { useDispatch, useSelector } from 'react-redux';
import { selectCamper, selectError, selectIsLoading } from '../../redux/campers/selectors';
import { useEffect, useState } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import { formatPrice } from '../../helpers/formatPrice';
import { formattedLocation } from '../../helpers/formattedLocation';
import Loader from '../../components/Loader/Loader';
import ImageModal from '../../components/ImageModal/ImageModal';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.outletLink, isActive && s.active);
};

const CamperDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamper) || {};
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState({
    alt: '',
    src: '',
  });

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return <Loader />;

  const { name, price, rating, location, description, gallery = [], reviews = [] } = camper;

  const openModal = img => {
    setModalIsOpen(true);
    setModalImg(img);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImg({
      alt: '',
      src: '',
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <div className={s.container}>
          <div className={clsx(s.camperDetails)}>
            <div className={s.camperHeader}>
              <div className={s.cardHeaderWrapp}>
                <div className={s.cardHeader}>
                  <h2 className={s.camperName}>{name}</h2>
                  <div className={s.reviewsAndLocationWrapp}>
                    <p className={s.reviews}>
                      <svg
                        className={clsx(
                          s.reviewsIcon,
                          reviews?.length === 0 && s.reviewsIconDefault
                        )}
                        width={16}
                        height={16}
                      >
                        <use href='/src/assets/icons.svg#icon-star-yellow'></use>
                      </svg>
                      {rating} ({reviews.length} Reviews)
                    </p>
                    <p className={s.location}>
                      <svg className={s.equipmentIcon} width={20} height={20}>
                        <use href='/src/assets/icons.svg#icon-map'></use>
                      </svg>
                      {location && formattedLocation(location)}
                    </p>
                  </div>
                  <span className={s.price}>€{price && formatPrice(price)}</span>
                </div>
              </div>
            </div>
            {gallery.length && (
              <ul className={s.camperPhotos}>
                {gallery.map((img, idx) => (
                  <li key={idx + 's87fd6sd7fadsfa87df6a'}>
                    <img
                      src={img.thumb}
                      alt='Camper'
                      className={s.image}
                      width={292}
                      height={312}
                      onClick={() => openModal({ alt: 'Camper', src: img.original })}
                    />
                  </li>
                ))}
              </ul>
            )}
            <p className={s.camperDescription}>{description}</p>
          </div>

          <div className={s.outletTitleContainer}>
            <div className={clsx(s.outletTitleWrapp)}>
              <div className={s.outletTitleBox}>
                <NavLink to='features' className={buildLinkClass}>
                  Features
                </NavLink>
              </div>
              <div className={s.outletTitleBox}>
                <NavLink to='reviews' className={buildLinkClass}>
                  Reviews
                </NavLink>
              </div>
            </div>
            <div className={s.stroke}></div>
          </div>

          <div className={s.outletAndBookingWrapp}>
            <div className={s.sub}>
              <Outlet />
            </div>

            <div className={s.sub}>
              <FormBooking />
            </div>
          </div>
        </div>
      )}
      <ImageModal {...modalImg} closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </>
  );
};

export default CamperDetails;
