import style from'./Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import { Skill } from './skill/Skill';
import { Title } from '../common/components/title/Title';

export const Skills = () => {

  const description = 'Id consectetur veniam aliqua qui et anim id pariatur esse culpa magna esse.'

  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title={'Skills'}/>
        <div className={style.skills}>
          <Skill title={'HTML'} description={description}/>
          <Skill title={'CSS'} description={description}/>
          <Skill title={'JS'} description={description}/>
          <Skill title={'React'} description={description}/>
        </div>
      </div>

    </div>
  );
}