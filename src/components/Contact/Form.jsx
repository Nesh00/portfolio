import '../../css/Contact/Form.css';

const Form = () => {
  return (
    <form className='contact__form'>
      <label className='contact__label'>
        name <input required type='text' className='contact__input' />
      </label>
      <label className='contact__label'>
        email <input required type='email' className='contact__input' />
      </label>
      <label className='contact__label'>
        tel number <input required type='phone' className='contact__input' />
      </label>
      <textarea required className='contact__textarea'></textarea>
      <button className='contact__send'>Send</button>
    </form>
  );
};

export default Form;
