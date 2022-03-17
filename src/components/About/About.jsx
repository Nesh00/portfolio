import { useEffect, useState } from 'react';
import '../../css/About/About.css';
import Scanner from './Scanner';

const About = () => {
  const [isScanned, setIsScanned] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsScanned((currState) => !currState);
    }, 17000);
  }, []);

  return (
    <section className='about'>
      <div className='details__container'>
        {!isScanned ? (
          <h1 className='loading'>Scanning . . .</h1>
        ) : (
          <h1 className='loading'>Scanning complete</h1>
        )}
      </div>
      <Scanner />
    </section>
  );
};

export default About;
