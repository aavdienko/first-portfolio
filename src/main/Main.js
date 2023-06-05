import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import meImage from '../assets/images/me.svg'

export const Main = () => {

  const meIcon = {
    backgroundImage: `url(${meImage})`,
  };

  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.greeting}>
          <span>Hi there</span>
          <h1>I am Alex</h1>
          <p>A Front-end Developer</p>
        </div>
        <div className={style.photo} style={meIcon}>
        </div>
      </div>
    </div>
  );
};
