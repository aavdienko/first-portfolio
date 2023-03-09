import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.greeting}>
          <span>Hi there</span>
          <h1>I am Alex</h1>
          <p>A Front-end Developer</p>
        </div>
        <div className={style.photo}>
          Photo
        </div>
      </div>
    </div>
  );
};
