import { useState } from 'react';
import '../../css/Nav/Nav.css';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Menu from './Menu';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [changePage, setChangePage] = useState(false);

  return (
    <nav className={`nav ${!openMenu && 'hideNav'}`}>
      <Hamburger setOpenMenu={setOpenMenu} />
      {openMenu && (
        <>
          <Logo changePage={changePage} />
          <Menu setChangePage={setChangePage} />
        </>
      )}
    </nav>
  );
};

export default Nav;
