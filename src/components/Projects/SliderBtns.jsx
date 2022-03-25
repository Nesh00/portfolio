import { useContext, useEffect, useState } from 'react';
import { CursorContext } from '../../context/CursorContext';
import '../../css/Projects/SliderBtns.css';

const SliderBtns = ({ projects, listRef, setOpenProjects }) => {
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

    setOpenProjects({
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
    }, 1000);
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
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        {'<'}
      </button>
      <button
        className='sliderBtn'
        value='right'
        onClick={slideHandler}
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        {'>'}
      </button>
    </div>
  );
};

export default SliderBtns;
