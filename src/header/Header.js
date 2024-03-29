import style from './Header.module.scss';
import { Nav } from './nav/Nav';

export const Header = () => {
  return (
    <div className={style.headerBlock}>
      <div className={style.headerContainer}>
        <Nav />
      </div>
    </div>
  );
};
