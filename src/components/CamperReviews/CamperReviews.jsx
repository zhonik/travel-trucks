import { useSelector } from 'react-redux';
import s from './CamperReviews.module.css';
import { selectCamper } from '../../redux/campers/selectors';

const CamperReviews = () => {
  const camper = useSelector(selectCamper) || {};

  const { reviews = [] } = camper;

  const firstLetter = name => name?.trim()?.charAt(0)?.toUpperCase() || '';

  const renderStars = rating => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width='16'
        height='16'
        fill={index < rating ? '#ffc531' : '#f2f4f7'}
        className={s.star}
      >
        <use href='../../assets/icons.svg#icon-star-yellow'></use>
      </svg>
    ));
  };

  return (
    <div className={s.reviewsContainer}>
      <ul className={s.reviewsList}>
        {reviews.map((review, idx) => (
          <li key={idx + 'asdfaewfq32r32'} className={s.reviewsItem}>
            <div className={s.reviewHeaderBox}>
              <div className={s.avatar}>{firstLetter(review.reviewer_name)}</div>
              <div className={s.reviewerNameWrapp}>
                <h3 className={s.reviewerName}>{review.reviewer_name}</h3>
                <div className={s.ratingBox}>{renderStars(review.reviewer_rating)}</div>
              </div>
            </div>
            <p className={s.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
