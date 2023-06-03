import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import { Project } from './project/Project';
import { Title } from '../common/components/title/Title';
import projectImage from '../assets/images/project1.svg';

export const Projects = () => {
  const description =
    'Incididunt magna velit cupidatat veniam labore anim. Fugiat incididunt est aliqua id deserunt irure veniam minim et proident. Pariatur anim laboris aute deserunt eiusmod occaecat pariatur in do.';

  const proj1 = {
    backgroundImage: `url(${projectImage})`,
  };

  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
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
    </div>
  );
};
