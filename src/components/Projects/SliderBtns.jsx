import { useContext, useEffect, useState } from 'react';
import { CursorContext } from '../../context/CursorContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/Projects/SliderBtns.css';

const SliderBtns = ({ projects, listRef, setSelectedProjects }) => {
  const { cursorChangeHandler } = useContext(CursorContext);
  const theta = (2 * Math.PI) / projects.length;
  const [slide, setSlide] = useState(0);

  const slideHandler = (event) => {
    const btn = event.target;

    if (btn.value === 'right') {
      setSlide((currTest) => currTest + 1);
    } else {
      setSlide((currTest) => currTest - 1);
    }
    btn.style.opacity = '1';

    setSelectedProjects({
      project1: false,
      project2: false,
      project3: false,
      project4: false,
      project5: false,
      project6: false,
      project7: false,
      project8: false,
      project9: false,
    });

    setTimeout(() => {
      btn.style.opacity = '.8';
    }, 300);
  };

  useEffect(() => {
    listRef.current.style.transform = `rotateY(${slide * -theta}rad)`;
  }, [slide, listRef, theta]);

  return (
    <div className='sliderBtns'>
      <button
        className='sliderBtn'
        value='left'
        onClick={slideHandler}
        onMouseEnter={() => cursorChangeHandler('cursor--previous')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        <FontAwesomeIcon icon={faAngleLeft} className='sliderBtn--icon' />
      </button>
      <button
        className='sliderBtn'
        value='right'
        onClick={slideHandler}
        onMouseEnter={() => cursorChangeHandler('cursor--next')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        <FontAwesomeIcon icon={faAngleRight} className='sliderBtn--icon' />
      </button>
    </div>
  );
};

export default SliderBtns;
