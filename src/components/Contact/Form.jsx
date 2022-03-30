import { useContext, useState } from 'react';
import { CursorContext } from '../../context/CursorContext';
import { send } from 'emailjs-com';
import '../../css/Contact/Form.css';
import Social from './Social';

const Form = () => {
  const { cursorChangeHandler } = useContext(CursorContext);
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const changeHandler = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    send('service_v3513bq', 'template_hxcpase', toSend, 'grPykzGLOJ5SfLfV5')
      .then(() => {
        setToSend({ name: '', email: '', number: '', message: '' });
      })
      .catch((err) => {
        alert('FAILED...', err);
      });
  };

  return (
    <section className='form__section'>
      <form className='contact__form' onSubmit={submitFormHandler}>
        <label
          className='contact__label'
          onMouseEnter={() => cursorChangeHandler('cursor--select')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          name
          <input
            value={toSend.name}
            name='name'
            type='text'
            className='contact__input'
            onChange={changeHandler}
            required
          />
        </label>
        <label
          className='contact__label'
          onMouseEnter={() => cursorChangeHandler('cursor--select')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          email
          <input
            value={toSend.email}
            name='email'
            type='email'
            className='contact__input'
            onChange={changeHandler}
            required
          />
        </label>
        <label
          className='contact__label'
          onMouseEnter={() => cursorChangeHandler('cursor--select')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          tel number
          <input
            value={toSend.number}
            name='number'
            type='text'
            pattern='07[0-9]{9}'
            className='contact__input'
            onChange={changeHandler}
            required
          />
        </label>
        <textarea
          value={toSend.message}
          name='message'
          className='contact__textarea'
          onMouseEnter={() => cursorChangeHandler('cursor--select')}
          onMouseLeave={() => cursorChangeHandler('')}
          onChange={changeHandler}
          required
        ></textarea>
        <button
          className='contact__send'
          onMouseEnter={() => cursorChangeHandler('cursor--send')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          Send
        </button>
      </form>
      <Social />
    </section>
  );
};

export default Form;
