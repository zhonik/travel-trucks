import { ClipLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.overlay} role='status' aria-live='polite' aria-label='Loading content...'>
      <ClipLoader
        size={100}
        color='#E44848'
        aria-hidden='true'
        cssOverride={{
          borderWidth: '8px',
          borderStyle: 'solid',
        }}
      />
    </div>
  );
};

export default Loader;
