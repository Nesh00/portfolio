import { useContext, useState } from 'react';
import { CursorContext } from '../../context/CursorContext';
import '../../css/About/Description.css';
import { userBio } from '../../data/userBio';
import myImg from '../../images/myImg.png';

const Description = () => {
  const { cursorChangeHandler } = useContext(CursorContext);
  const [open, setOpen] = useState({
    name: false,
    location: false,
    info: false,
    focus: false,
    'front-end': false,
    'back-end': false,
    testing: false,
    other: false,
  });

  const openHandler = (name) => {
    open[name] = !open[name];
    setOpen((currState) => {
      return { ...currState };
    });
  };

  const descriptionListFn = (user) => {
    let descriptionList;

    if (Array.isArray(user.description)) {
      descriptionList = user.description.map((listItem) => {
        return (
          <li key={listItem} className='description__text'>
            {listItem}
          </li>
        );
      });
    }

    return descriptionList;
  };

  return (
    <section className='img-description__container'>
      {userBio.map((user) => {
        return (
          <>
            <div
              key={user.className}
              className={`${user.className} ${
                open[user.className] && `${user.className}--open`
              }`}
              onClick={() => openHandler(user.className)}
              onMouseEnter={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
            ></div>
            <div className='description'>
              <p className='description__header'>
                {user.className.replace(/-/g, ' ')}
              </p>
              {Array.isArray(user.description) ? (
                descriptionListFn(user)
              ) : (
                <p className='description__text'>{user.description}</p>
              )}
            </div>
          </>
        );
      })}
      <img src={myImg} alt='Profile' className='about__img' />
    </section>
  );
};

export default Description;
