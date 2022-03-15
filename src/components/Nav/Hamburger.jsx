import '../../css/Nav/Hamburger.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hamburger = ({ setOpenMenu }) => {
  const openMenuHandler = () => {
    setOpenMenu((currState) => !currState);
  };
  return (
    <section className='hamburger__container'>
      <FontAwesomeIcon icon={faBars} size='3x' onClick={openMenuHandler} />
    </section>
  );
};

export default Hamburger;
