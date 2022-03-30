import '../../css/Contact/Social.css';
import { useContext } from 'react';
import { CursorContext } from '../../context/CursorContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <section className='contact__social'>
      <a
        href='https://www.facebook.com/nenad.cvetanovski.3'
        target='_blank'
        rel='noopener noreferrer'
        className='contact__social--icon'
        onMouseEnter={() => cursorChangeHandler('cursor--open')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a
        href='https://www.instagram.com/nesh_iii_of_macedon'
        target='_blank'
        rel='noopener noreferrer'
        className='contact__social--icon'
        onMouseEnter={() => cursorChangeHandler('cursor--open')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        <FontAwesomeIcon icon={faInstagram} className='contact__social--icon' />
      </a>
      <a
        href='https://www.linkedin.com/in/nenad-tsvetanovski-3101b474'
        target='_blank'
        rel='noopener noreferrer'
        className='contact__social--icon'
        onMouseEnter={() => cursorChangeHandler('cursor--open')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        <FontAwesomeIcon icon={faLinkedin} className='contact__social--icon' />
      </a>
      <div className='contact__info'>
        <p>07979319289</p>
        <p>c.nenad00@gmail.com</p>
      </div>
    </section>
  );
};

export default Social;
