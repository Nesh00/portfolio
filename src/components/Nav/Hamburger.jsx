import '../../css/Nav/Hamburger.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { CursorContext } from '../../context/CursorContext';

const Hamburger = ({ setOpenMenu }) => {
  const { isLoaded } = useContext(LoaderContext);
  const { cursorChangeHandler } = useContext(CursorContext);

  const openMenuHandler = () => {
    setOpenMenu((currState) => !currState);
  };

  return (
    <section
      className={`hamburger__container ${isLoaded && 'hamburger-red'}`}
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler('')}
    >
      <FontAwesomeIcon icon={faBars} size='3x' onClick={openMenuHandler} />
    </section>
  );
};

export default Hamburger;
