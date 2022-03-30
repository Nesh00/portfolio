import '../../css/Contact/Contact.css';
import Form from './Form';
import Map from './Map';

const Contact = () => {
  if ('virtualKeyboard' in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }

  return (
    <footer className='contact'>
      <Form />
      <Map />
    </footer>
  );
};

export default Contact;
