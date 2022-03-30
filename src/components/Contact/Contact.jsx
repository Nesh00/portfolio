import '../../css/Contact/Contact.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Form from './Form';
import Map from './Map';

const Contact = () => {
  const { width } = useWindowDimensions();
  console.log(width);

  if ('virtualKeyboard' in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }

  return (
    <footer className='contact'>
      <Form />
      {width >= 1440 && <Map />}
    </footer>
  );
};

export default Contact;
