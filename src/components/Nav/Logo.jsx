import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CursorContext } from '../../context/CursorContext';
import { LoaderContext } from '../../context/LoaderContext';
import '../../css/Nav/Logo.css';
import logo from '../../images/logo.png';

const Logo = ({ changePageHandler }) => {
  const { isLoaded } = useContext(LoaderContext);
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <Link
      to={'/'}
      onClick={changePageHandler}
      onMouseEnter={() => cursorChangeHandler('cursor--select')}
      onMouseLeave={() => cursorChangeHandler('')}
    >
      <section className='logo--container'>
        <div
          className={`${isLoaded ? 'shape--loading' : 'shape'} cube backfaces`}
        >
          <div className='plane one'></div>
          <div className='plane two'></div>
          <div className='plane three'></div>
          <div className='plane four'></div>
          <div className='plane five'></div>
          <div className='plane six'></div>
          <div className='plane seven'></div>
          <div className='plane eight'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='plane nine'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='plane ten'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='plane eleven'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='plane twelve'></div>
        </div>
      </section>
    </Link>
  );
};

export default Logo;
