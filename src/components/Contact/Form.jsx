import { useContext, useState } from 'react';
import { CursorContext } from '../../context/CursorContext';
import '../../css/Contact/Form.css';

const Form = () => {
  const { cursorChangeHandler } = useContext(CursorContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changeNumberHandler = (event) => {
    setNumber(event.target.value);
  };
  const changeMessageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(name, email, number, message);
    setName('');
    setEmail('');
    setNumber('');
    setMessage('');
  };

  return (
    <form className='contact__form' onSubmit={submitFormHandler}>
      <label
        className='contact__label'
        onMouseEnter={() => cursorChangeHandler('cursor--select')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        name
        <input
          value={name}
          required
          type='text'
          className='contact__input'
          onChange={changeNameHandler}
        />
      </label>
      <label
        className='contact__label'
        onMouseEnter={() => cursorChangeHandler('cursor--select')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        email
        <input
          value={email}
          required
          type='email'
          className='contact__input'
          onChange={changeEmailHandler}
        />
      </label>
      <label
        className='contact__label'
        onMouseEnter={() => cursorChangeHandler('cursor--select')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        tel number
        <input
          value={number}
          required
          type='text'
          pattern='07[0-9]{9}'
          className='contact__input'
          onChange={changeNumberHandler}
        />
      </label>
      <textarea
        value={message}
        required
        className='contact__textarea'
        onMouseEnter={() => cursorChangeHandler('cursor--select')}
        onMouseLeave={() => cursorChangeHandler('')}
        onChange={changeMessageHandler}
      ></textarea>
      <button
        className='contact__send'
        onMouseEnter={() => cursorChangeHandler('cursor--send')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        Send
      </button>
    </form>
  );
};

export default Form;
