import style from'./Nav.module.scss';
import { Link } from "react-scroll";


export const Nav = () => {
  return (
    <div className={style.nav}>
      <Link to={'main'} activeClass={style.active} spy={true} smooth={true} duration={450} className={style.navlinkItem}>Main</Link>
      <Link to={'skills'} activeClass={style.active} spy={true} smooth={true} duration={450} className={style.navlinkItem}>Skills</Link>
      <Link to={'projects'} activeClass={style.active} spy={true} smooth={true} duration={450} className={style.navlinkItem}>Projects</Link>
      <Link to={'contacts'} activeClass={style.active} spy={true} smooth={true} duration={450} className={style.navlinkItem}>Contacts</Link>
      {/* <a href=''>Main</a>
      <a href='#skills'>Skills</a>
      <a href='#projects'>Projects</a>
      <a href='#contacts'>Contacts</a> */}
    </div>
  );
}