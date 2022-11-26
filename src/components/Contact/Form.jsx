import emailjs from '@emailjs/browser';
import '../../css/Contact/Form.css';
import Social from './Social';
import { useRef } from 'react';

const Form = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_v3513bq',
        'template_hxcpase',
        formRef.current,
        'grPykzGLOJ5SfLfV5'
      )
      .catch((error) => alert(error.text));

    formRef.current.reset();
  };

  return (
    <section className='form__section'>
      <form ref={formRef} onSubmit={sendEmail} className='contact__form'>
        <label className='contact__label'>
          name
          <input type='text' name='name' className='contact__input' />
        </label>
        <label className='contact__label'>
          email
          <input type='email' name='email' className='contact__input' />
        </label>
        <label className='contact__label'>
          number
          <input
            type='number'
            pattern='07[0-9]{9}'
            name='number'
            className='contact__input'
          />
        </label>
        <textarea name='message' className='contact__textarea' />
        <input type='submit' value='Send' className='contact__send' />
      </form>
      <Social />
    </section>
  );
};

export default Form;
