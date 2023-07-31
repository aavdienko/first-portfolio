import style from './Footer.module.scss';
import styleContainer from './../common/styles/Container.module.scss';
import fbImage from '../assets/images/facebook.svg'
import linkedInImage from '../assets/images/linkedin.svg'
import gitHubImage from '../assets/images/gitHub.svg'
import pinterestImage from '../assets/images/pinterest.svg'
import { Fade } from 'react-awesome-reveal';
import { Tilt } from 'react-tilt';

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
      <Fade direction={"up"} triggerOnce={true}>
        <div className={style.footerContainer}>
          <h2 className={style.title}>Alex</h2>
          <div className={style.icons}>
            <Tilt options={{max: 15}} >
              <a href='www.facebook.com' className={style.icon} style={fbIcon}></a>
            </Tilt>
            <Tilt options={{max: 15}} >
              <a href='www.linkedin.com'  className={style.icon} style={linkedInIcon}></a>
            </Tilt>
            <Tilt options={{max: 15}} >
              <a href='www.github.com' className={style.icon} style={gitHubIcon}></a>
            </Tilt>
            <Tilt options={{max: 15}} >
              <a href='www.pinterest.com' className={style.icon} style={pinterestIcon}></a>
            </Tilt>
            </div>
            <h3 className={style.copyRight}>2023. All Rights Reserved.</h3>
        </div>
      </Fade>
    </div>
  );
};
