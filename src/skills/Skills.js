import style from'./Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill title={'HTML'} description={'Description'}/>
          <Skill title={'CSS'} description={'Description'}/>
          <Skill title={'JS'} description={'Description'}/>
          <Skill title={'React'} description={'Description'}/>
        </div>
      </div>

    </div>
  );
}