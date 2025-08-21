import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.textContainer}>
          <div className={s.title}>Campers of your dreams</div>

          <p className={s.subtitle}>You can find everything you want in our catalog</p>
        </div>

        <button type='button'>View Now</button>
      </div>
    </div>
  );
};

export default Home;
