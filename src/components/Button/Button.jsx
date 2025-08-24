import s from './Button.module.css';

const Button = ({ onClick, isLoading }) => {
  return (
    <button className={s.button} onClick={onClick} disabled={isLoading}>
      {isLoading ? 'Loading' : 'Load more'}
    </button>
  );
};

export default Button;
