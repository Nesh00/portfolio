import '../../css/About/Scanner.css';
import myImg from '../../images/myImg.png';

const ImageDescription = () => {
  return (
    <div className='scanner__container'>
      <div className='scanner'></div>
      <div className='name'>
        <div className='dot'></div>
        <div className='description'>
          <p>Nenad Tsvetanovski</p>
        </div>
      </div>
      <div className='location'>
        <div className='dot'></div>
        <div className='description'>
          <p>Manchester, UK</p>
        </div>
      </div>
      <div className='info'>
        <div className='dot'></div>
        <div className='description'>
          <p>
            A full-stack developer with a result-driven mindset, time management
            and quick responsiveness to tasks given.
          </p>
        </div>
      </div>
      <div className='focus'>
        <div className='dot'></div>
        <p className='description'>
          His main focus is to build scalable and responsive applications that
          are user friendly and can be easily maintained.
        </p>
      </div>
      <img src={myImg} alt='Profile' className='about__img' />
    </div>
  );
};

export default ImageDescription;
