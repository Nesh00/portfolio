import '../../css/About/About.css';
import InfoBoard from '../InfoBoard';
import Description from './Description';
import Stars from './Stars';

const About = () => {
  return (
    <main className='about'>
      <InfoBoard info={'select'} />
      <Description />
      <Stars />
    </main>
  );
};

export default About;
