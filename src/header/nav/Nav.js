import style from'./Nav.module.scss';
import { Link } from "react-scroll";


export const Nav = () => {
  return (
    <div className={style.nav}>
      <Link to={'main'} activeClass={style.active} spy={true} smooth={true} offset={-70} duration={650} className={style.navlinkItem}>Main</Link>
      <Link to={'skills'} activeClass={style.active} spy={true} smooth={true} offset={-70} duration={650} className={style.navlinkItem}>Skills</Link>
      <Link to={'projects'} activeClass={style.active} spy={true} smooth={true} offset={-70} duration={650} className={style.navlinkItem}>Projects</Link>
      <Link to={'contacts'} activeClass={style.active} spy={true} smooth={true} offset={-70} duration={650} className={style.navlinkItem}>Contacts</Link>
    </div>
  );
}