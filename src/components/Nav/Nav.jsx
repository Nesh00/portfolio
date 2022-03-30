import { useContext, useState } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import '../../css/Nav/Nav.css';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Menu from './Menu';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { setIsLoaded } = useContext(LoaderContext);

  const changePageHandler = () => {
    setIsLoaded((currState) => !currState);

    setTimeout(() => {
      setIsLoaded((currState) => !currState);
    }, 2800);

    setTimeout(() => {
      setOpenMenu(false);
    }, 4000);
  };

  return (
    <nav className={`nav ${!openMenu && 'hideNav'}`}>
      <Hamburger setOpenMenu={setOpenMenu} />
      {openMenu && (
        <>
          <Logo changePageHandler={changePageHandler} />
          <Menu changePageHandler={changePageHandler} />
        </>
      )}
    </nav>
  );
};

export default Nav;
