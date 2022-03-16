import { useContext } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import '../../css/Nav/Menu.css';

const listItems = ['About', 'Projects', 'Contact'];

const Menu = () => {
  const { setIsLoaded } = useContext(LoaderContext);

  const changePageHandler = () => {
    setIsLoaded((currState) => !currState);

    setTimeout(() => {
      setIsLoaded((currState) => !currState);
    }, 2800);
  };

  return (
    <ul className='menu'>
      {listItems.map((listItem) => {
        return (
          <li key={listItem} className='menu__item' onClick={changePageHandler}>
            <p className='menu__link'>{listItem}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
