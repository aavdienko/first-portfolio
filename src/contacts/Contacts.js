// import style from './Contacts.module.scss';
// import styleContainer from './../common/styles/Container.module.scss';
// import { Title } from '../common/components/title/Title';
// import { Button } from '../common/components/button/Button';
// import { Fade } from 'react-awesome-reveal';

// export const Contacts = () => {
//   return (
//     <div id='contacts' className={style.contactsBlock}>
//       <Fade direction={"up"} triggerOnce={true}>
//         <div className={`${styleContainer.container} ${style.contactsContainer}`}>
//           <Title title={'Contacts'}/>
//           <form className={style.form}>
//             <input placeholder='name'/>
//             <input type='email' placeholder='email'/>
//             <input type='number' placeholder='tel'/>
//             <textarea placeholder='description'/>
//           </form>
//           <Button title={'Send'}/>
//           {/* <button>Send</button> */}
//         </div>
//       </Fade>
//     </div>
//   );
// };


import { useState } from 'react';
import emailjs from 'emailjs-com';
import style from './Contacts.module.scss';
import styleContainer from './../common/styles/Container.module.scss';
import { Title } from '../common/components/title/Title';
import { Button } from '../common/components/button/Button';
import { Fade } from 'react-awesome-reveal';

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Configure your EmailJS service details here
    const serviceID = "service_gmail";
    const templateID = 'template_wlghrtd';
    const userID = 'NWPKRg1w6lOAyYGQm';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        setFormData({
          name: '',
          email: '',
          tel: '',
          description: '',
        })
        console.log('Email sent successfully:', response);
        // Optionally, you can show a success message or perform other actions
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        // Optionally, you can show an error message or perform other actions
      });
  };

  const handleKeyPress = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div id='contacts' className={style.contactsBlock}>
      <Fade direction={'up'} triggerOnce={true}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
          <Title title={'Contacts'} />
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type='email'
              name='email'
              placeholder='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type='number'
              name='tel'
              placeholder='tel'
              value={formData.tel}
              onChange={handleInputChange}
            />
            <textarea
              name='description'
              placeholder='description'
              value={formData.description}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <Button type='submit' title={'Send'} />
          </form>
        </div>
      </Fade>
    </div>
  );
};