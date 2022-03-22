import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoaderContext } from '../../context/LoaderContext';
import { CursorContext } from '../../context/CursorContext';
import '../../css/Nav/Menu.css';

const listItems = ['Home', 'About', 'Projects', 'Contact'];

const Menu = ({ changePageHandler }) => {
  const { isLoaded } = useContext(LoaderContext);
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <ul className={`menu ${isLoaded && 'menu-red'}`}>
      {listItems.map((listItem) => {
        return (
          <li
            key={listItem}
            className={`menu__item ${isLoaded && 'menu__item-red'}`}
            onClick={changePageHandler}
            onMouseEnter={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
          >
            <Link to={`${listItem.toLowerCase()}`} className='menu__link'>
              {listItem}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
