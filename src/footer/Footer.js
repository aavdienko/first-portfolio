import style from './Footer.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import fbImage from '../assets/images/facebook.svg'
import linkedInImage from '../assets/images/linkedin.svg'
import gitHubImage from '../assets/images/git.svg'
import pinterestImage from '../assets/images/pinterest.svg'


export const Footer = () => {

  const fbIcon = {
    backgroundImage: `url(${fbImage})`
  };
  const linkedInIcon = {
    backgroundImage: `url(${linkedInImage})`
  };
  const gitHubIcon = {
    backgroundImage: `url(${gitHubImage})`
  };
  const pinterestIcon = {
    backgroundImage: `url(${pinterestImage})`
  };

  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Alex</h2>
        <div className={style.icons}>
          <a href='www.facebook.com' className={style.icon} style={fbIcon}></a>
          <a href='www.linkedin.com'  className={style.icon} style={linkedInIcon}></a>
          <a href='www.github.com' className={style.icon} style={gitHubIcon}></a>
          <a href='www.pinterest.com' className={style.icon} style={pinterestIcon}></a>
        </div>
        <h3 className={style.copyRight}>2023. All Rights Reserved.</h3>
      </div>
    </div>
  );
};
