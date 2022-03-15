import '../../css/Nav/Menu.css';

const listItems = ['About', 'Projects', 'Contact'];

const Menu = () => {
  return (
    <ul className='menu'>
      {listItems.map((listItem) => {
        return (
          <li key={listItem} className='menu__item'>
            <p className='menu__link'>{listItem}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
