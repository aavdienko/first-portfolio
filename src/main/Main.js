import style from './Main.module.scss';
import Particles from 'react-particles';
import meImage from '../assets/images/me.svg';
import { Particle } from '../common/components/practicle/Particle';
import { Fade } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt';
import s from './../common/components/practicle/Particle.module.scss';

// const defaultOptions = {
//   reverse: false, // reverse the tilt direction
//   max: 35, // max tilt rotation (degrees)
//   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 1000, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
// };

export const Main = () => {
  const meIcon = {
    backgroundImage: `url(${meImage})`,
  };

  return (
    <div id='main' className={style.mainBlock}>
      <Particle/>
      {/* <Particles className={s.practicles} params={defaultOptions}/> */}
      <div className={style.container}>
        <Fade direction={'left'} triggerOnce={true}>
          <div className={style.greeting}>
            <span>Hi there</span>
            <h1>I am Alex</h1>
            <p>
              <ReactTypingEffect text="A Front-end Developer." speed={'200'} />
            </p>
          </div>
        </Fade>
        <Fade direction={'right'} triggerOnce={true}>
          <Tilt options={{max: 10}} >
            <div className={style.photo} style={meIcon}></div>
          </Tilt>
        </Fade>
      </div>
    </div>
  );
};
