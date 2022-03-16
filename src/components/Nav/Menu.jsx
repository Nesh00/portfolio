import { Link } from 'react-router-dom';
import '../../css/Nav/Menu.css';

const listItems = ['Home', 'About', 'Projects', 'Contact'];

const Menu = ({ changePageHandler }) => {
  return (
    <ul className='menu'>
      {listItems.map((listItem) => {
        return (
          <li key={listItem} className='menu__item' onClick={changePageHandler}>
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
