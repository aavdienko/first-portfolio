import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../common/components/title/Title';
import htmlImage from '../assets/images/htmlIcon.svg';
import cssImage from '../assets/images/cssIcon.svg';
import jsImage from '../assets/images/jsIcon.svg';
import reactImage from '../assets/images/react.svg';
import gitImage from '../assets/images/git.svg';
import muiImage from '../assets/images/materialUI.svg';
import postmanImage from '../assets/images/postman.svg';
import restAPIImage from '../assets/images/restAPI.svg';
import rtkImage from '../assets/images/rtk.svg';
import storyBookImage from '../assets/images/storybook.svg';
import sassImage from '../assets/images/sass.svg';
import swaggerImage from '../assets/images/swagger.svg';
import tsImage from '../assets/images/ts.svg';
import utImage from '../assets/images/unitTests.svg';
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
  const gitIcon = {
    backgroundImage: `url(${gitImage})`,
  };
  const muiIcon = {
    backgroundImage: `url(${muiImage})`,
  };
  const postmanIcon = {
    backgroundImage: `url(${postmanImage})`,
  };
  const restAPIIcon = {
    backgroundImage: `url(${restAPIImage})`,
  };
  const rtkIcon = {
    backgroundImage: `url(${rtkImage})`,
  };
  const sassIcon = {
    backgroundImage: `url(${sassImage})`,
  };
  const storyBookIcon = {
    backgroundImage: `url(${storyBookImage})`,
  };
  const reactIcon = {
    backgroundImage: `url(${reactImage})`,
  };
  const swaggerIcon = {
    backgroundImage: `url(${swaggerImage})`,
  };
  const tsIcon = {
    backgroundImage: `url(${tsImage})`,
  };
  const utIcon = {
    backgroundImage: `url(${utImage})`,
  };


  return (
    <div id='skills'className={style.skillsBlock}>
      <Fade direction={"up"} triggerOnce={true}>
        <div className={style.skillsContainer}>
          <Title title={'Skills'} />
          <div className={style.skills}>
            <Skill style={reactIcon} title={'React'}/>
            <Skill style={rtkIcon} title={'Redux Toolkit'}/>
            <Skill style={jsIcon} title={'JS'}/>
            <Skill style={tsIcon} title={'TS'}/>

            <Skill style={htmlIcon} title={'HTML'}/>
            <Skill style={cssIcon} title={'CSS'}/>
            <Skill style={gitIcon} title={'GIT'}/>
            <Skill style={muiIcon} title={'Material UI'}/>
            <Skill style={postmanIcon} title={'Postman'}/>
            <Skill style={restAPIIcon} title={'Rest API'}/>

            <Skill style={sassIcon} title={'SASS'}/>
            <Skill style={storyBookIcon} title={'StoryBook'}/>
            <Skill style={swaggerIcon} title={'Swagger'}/>

            <Skill style={utIcon} title={'Unit Tests'}/>
          </div>
        </div>
      </Fade>
    </div>
  );
};
