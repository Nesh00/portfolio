import { useEffect, useRef } from 'react';
import '../../css/About/Scanner.css';
import myImg from '../../images/myImg.png';

const Scanner = () => {
  return (
    <div className='scanner__container'>
      <div className='scanner'></div>
      <div className='forehead'>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <div className='nose'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <div className='cheeks'>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <div className='chin'>
        <div className='dot'></div>
      </div>

      <img src={myImg} alt='Profile' className='about__img' />
    </div>
  );
};

export default Scanner;
