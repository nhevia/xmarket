import s from './Dots.module.css';

interface AppProps {
  color?: string;
}

const Dots = ({ color }: AppProps) => {
  return (
    <div className={s.dots}>
      <div
        className={s.bounce1}
        style={color ? { backgroundColor: color } : {}}
      ></div>
      <div
        className={s.bounce2}
        style={color ? { backgroundColor: color } : {}}
      ></div>
      <div style={color ? { backgroundColor: color } : {}}></div>
    </div>
  );
};

export default Dots;
