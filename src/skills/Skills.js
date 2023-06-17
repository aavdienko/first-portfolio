import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../common/components/title/Title';
import htmlImage from '../assets/images/htmlIcon.svg';
import cssImage from '../assets/images/cssIcon.svg';
import jsImage from '../assets/images/jsIcon.svg';
import reactImage from '../assets/images/react.svg';
import { Fade } from "react-awesome-reveal";

export const Skills = () => {
  const description =
    'Id consectetur veniam aliqua qui et anim id pariatur esse culpa magna esse.';

  const htmlIcon = {
    backgroundImage: `url(${htmlImage})`,
  };
  const cssIcon = {
    backgroundImage: `url(${cssImage})`,
  };
  const jsIcon = {
    backgroundImage: `url(${jsImage})`,
  };
  const reactIcon = {
    backgroundImage: `url(${reactImage})`,
  };

  return (
    <div id='skills'className={style.skillsBlock}>
      <Fade direction={"up"} triggerOnce={true}>
        <div className={style.skillsContainer}>
          <Title title={'Skills'} />
          <div className={style.skills}>
            <Skill style={htmlIcon} title={'HTML'} description={description} />
            <Skill style={cssIcon} title={'CSS'} description={description} />
            <Skill style={jsIcon} title={'JS'} description={description} />
            <Skill style={reactIcon} title={'React'} description={description} />
          </div>
        </div>
      </Fade>
    </div>
  );
};
