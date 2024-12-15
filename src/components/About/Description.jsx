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

  const openHandler = (title) => {
    if (open[title]) {
      setOpen((currState) => {
        const newState = { ...currState, [title]: !currState[title] };

        return newState;
      });
    } else {
      setOpen((currState) => {
        const newState = { ...currState };
        const keys = Object.keys(newState);
  
        keys.map((key) => {
          newState[key] = false;
        });
  
        newState[title] = !newState[title];
    
        return newState;
      });
    }
  };

  const descriptionListFn = (user) => {
    let descriptionList;

    if (Array.isArray(user.description)) {
      descriptionList = user.description.map((listItem) => (
        <li key={listItem} className='description__text'>
          {listItem}
        </li>
      ));
    }

    return descriptionList;
  };

  return (
    <>
      {userBio.map((user) => (
        <section key={user.title}>
          <div
            className={`${user.title} ${
              open[user.title] && `${user.title}--open`
            }`}
            onClick={() => openHandler(user.title)}
            onMouseEnter={() => cursorChangeHandler('cursor--select')}
            onMouseLeave={() => cursorChangeHandler('')}
          />
          <div className='description'>
            <p className='description__header'>
              {user.title.replace(/-/g, ' ')}
            </p>
            {Array.isArray(user.description) ? (
              descriptionListFn(user)
            ) : (
              <p className='description__text'>{user.description}</p>
            )}
          </div>
        </section>
      ))}
      <img src={myImg} alt='Profile' className='about__img' />
    </>
  )
};

export default Description;
