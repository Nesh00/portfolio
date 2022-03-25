import '../../css/About/About.css';
import InfoBoard from '../InfoBoard';
import Description from './Description';

const About = () => {
  return (
    <main className='about'>
      <InfoBoard info={'Select'} />
      <Description />
    </main>
  );
};

export default About;
