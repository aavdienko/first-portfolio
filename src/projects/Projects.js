import style from'./Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import { Project } from './project/Project';

export const Projects = () => {

  return (
    <div className={style.projectsBlock}>
    <div className={`${styleContainer.container} ${style.projectsContainer}`}>
      <div className={style.title}>
        <h2 >Projects</h2>
      </div>
      <div className={style.projects}>
        <Project title={'Project #1'} description={'Description'} />
        <Project title={'Project #2'} description={'Description'}/>
        <Project title={'Project #3'} description={'Description'}/>
      </div>
    </div>

  </div>
  )
}