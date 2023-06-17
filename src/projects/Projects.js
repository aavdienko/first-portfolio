import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.scss';
import { Project } from './project/Project';
import { Title } from '../common/components/title/Title';
import projectImage from '../assets/images/project1.svg';
import { Fade } from 'react-awesome-reveal';

export const Projects = () => {
  const description =
    'Incididunt magna velit cupidatat veniam labore anim. Fugiat incididunt est aliqua id deserunt irure veniam minim et proident. Pariatur anim laboris aute deserunt eiusmod occaecat pariatur in do.';

  const proj1 = {
    backgroundImage: `url(${projectImage})`,
  };

  return (
    <div id='projects'className={style.projectsBlock}>
      <Fade direction={"up"} triggerOnce={true}>
        <div className={style.projectsContainer}>
          <Title title={'Projects'} />
          <div className={style.projects}>
            <Project
              style={proj1}
              title={'Project #1'}
              description={description}
            />
            <Project
              style={proj1}
              title={'Project #2'}
              description={description}
            />
            <Project
              style={proj1}
              title={'Project #3'}
              description={description}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};
