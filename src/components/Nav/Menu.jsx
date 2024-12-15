import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoaderContext } from '../../context/LoaderContext';
import { CursorContext } from '../../context/CursorContext';
import '../../css/Nav/Menu.css';

const menuItems = ['Home', 'About', 'Projects', 'Contact'];

const Menu = ({ changePageHandler }) => {
  const { isLoaded } = useContext(LoaderContext);
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <ul className={`menu ${isLoaded && 'menu-red'}`}>
      {menuItems.map((menuItem) => {
        return (
          <Link
            to={`${menuItem.toLowerCase()}`}
            key={menuItem}
            className='menu__link'
          >
            <li
              className={`menu__item ${isLoaded && 'menu__item-red'}`}
              onClick={changePageHandler}
              onMouseEnter={() => cursorChangeHandler('cursor--select')}
              onMouseLeave={() => cursorChangeHandler('')}
            >
              {menuItem}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Menu;
