import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.title}>Contacts</h2>
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
