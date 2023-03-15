import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Alexander Avdienko</h2>
        <div className={style.icons}>
          <div className={style.icon}></div>
          <div className={style.icon}></div>
          <div className={style.icon}></div>
          <div className={style.icon}></div>
        </div>
        <h3 className={style.title}>2023 Все права защищены</h3>
      </div>
    </div>
  );
};
