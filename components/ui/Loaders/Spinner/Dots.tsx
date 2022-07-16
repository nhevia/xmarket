import s from './Dots.module.css';

const Dots = () => {
  return (
    <div className={s.spinner}>
      <div className={s.bounce1}></div>
      <div className={s.bounce2}></div>
      <div></div>
    </div>
  );
};

export default Dots;
