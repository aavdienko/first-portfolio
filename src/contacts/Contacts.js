import style from './Contacts.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import { Title } from '../common/components/title/Title';

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Title title={'Contacts'}/>
        <form className={style.form}>
          <input placeholder='name'/>
          <input type='email' placeholder='email'/>
          <input type='number' placeholder='tel'/>
          <textarea placeholder='description'/>
        </form>
        <button>Send</button>
      </div>
    </div>
  );
};
