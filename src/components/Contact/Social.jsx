import '../../css/Contact/Social.css';
import { useContext } from 'react';
import { CursorContext } from '../../context/CursorContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials } from '../../data/socials';

const Social = () => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <section className='contact__social'>
      {socials.map((social) => (
              <a
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className='contact__social--icon'
              onMouseEnter={() => cursorChangeHandler('cursor--open')}
              onMouseLeave={() => cursorChangeHandler('')}
            >
              <FontAwesomeIcon icon={social.icon} className='contact__social--icon' />
            </a>
      ))}

      <div className='contact__info'>
        <p>+44 7979 319289</p>
        <p>c.nenad00@gmail.com</p>
      </div>
    </section>
  );
};

export default Social;
