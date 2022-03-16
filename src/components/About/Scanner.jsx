import '../../css/About/Scanner.css';
import myImg from '../../images/myImg.png';

const Scanner = () => {
  return (
    <div className='scanner__container'>
      <div className='scanner'></div>
      <div className='eyes'>
        <div className='dot dot--eyes'></div>
        <div className='dot dot--eyes'></div>
      </div>
      <div className='nose'>
        <div className='dot dot--nose'></div>
      </div>
      <div className='mouth'>
        <div className='dot dot--mouth'></div>
        <div className='dot dot--mouth'></div>
        <div className='dot dot--mouth'></div>
      </div>
      <div className='chin'>
        <div className='dot dot--chin'></div>
      </div>
      <img src={myImg} alt='Profile' className='about__img' />
    </div>
  );
};

export default Scanner;
