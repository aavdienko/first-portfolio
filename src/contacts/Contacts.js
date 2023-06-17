import style from './Contacts.module.scss';
import styleContainer from './../common/styles/Container.module.scss';
import { Title } from '../common/components/title/Title';
import { Button } from '../common/components/button/Button';
import { Fade } from 'react-awesome-reveal';

export const Contacts = () => {
  return (
    <div id='contacts' className={style.contactsBlock}>
      <Fade direction={"up"} triggerOnce={true}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
          <Title title={'Contacts'}/>
          <form className={style.form}>
            <input placeholder='name'/>
            <input type='email' placeholder='email'/>
            <input type='number' placeholder='tel'/>
            <textarea placeholder='description'/>
          </form>
          <Button title={'Send'}/>
          {/* <button>Send</button> */}
        </div>
      </Fade>
    </div>
  );
};
