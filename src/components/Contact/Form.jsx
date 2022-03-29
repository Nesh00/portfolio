import { useContext } from 'react';
import { CursorContext } from '../../context/CursorContext';
import '../../css/Contact/Form.css';

const Form = () => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <form className='contact__form'>
      <label
        className='contact__label'
        onMouseEnter={() => cursorChangeHandler('cursor--select')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        name <input required type='text' className='contact__input' />
      </label>
      <label
        className='contact__label'
        onMouseEnter={() => cursorChangeHandler('cursor--select')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        email <input required type='email' className='contact__input' />
      </label>
      <label
        className='contact__label'
        onMouseEnter={() => cursorChangeHandler('cursor--select')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        tel number <input required type='phone' className='contact__input' />
      </label>
      <textarea
        required
        className='contact__textarea'
        onMouseEnter={() => cursorChangeHandler('cursor--select')}
        onMouseLeave={() => cursorChangeHandler('')}
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
