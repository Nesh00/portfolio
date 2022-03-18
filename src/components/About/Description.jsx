import { useEffect, useState } from 'react';
import '../../css/About/Description.css';

const frontEnd = [
  'HTML',
  'CSS/SCSS',
  'JavaScript',
  'Boostrap',
  'ReactJS',
  'React Native/Expo',
];
const backEnd = ['NodeJS', 'ExpressJS', 'SQL/PostresQL', 'Firebase 9'];
const testing = ['Jest', 'Supertest'];
const other = ['Trello', 'Agile/SCRUM'];

const Description = () => {
  const [isScanned, setIsScanned] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsScanned(true);
    }, 17500);
  }, []);

  return (
    <div className='details__container'>
      {!isScanned ? (
        <h1 className='loading'>Scanning . . .</h1>
      ) : (
        <>
          <h1 className='loading'>Nenad Tsvetanovski</h1>
          <div className='location__container'>
            <p>
              Location: <span>Manchester, UK</span>
            </p>
            <p>
              Origin: <span>Sveti Nikole, Macedonia</span>
            </p>
          </div>
          <p className='description'>
            A full-stack developer with a result-driven mindset, time management
            and quick responsiveness to tasks given. The main focus is to build
            scalable and responsive applications that are user friendly and can
            be easily maintained.
          </p>
          <h2 className='skills__header'>Skills</h2>
          <div className='skills__container'>
            <div className='front-end'>
              <h3 className='front-end__header'>Front End</h3>
              {frontEnd.map((skill) => {
                return (
                  <p key={skill} className='skill'>
                    {skill}
                  </p>
                );
              })}
            </div>
            <div className='back-end'>
              <h3 className='back-end__header'>Back End</h3>
              {backEnd.map((skill) => {
                return (
                  <p key={skill} className='skill'>
                    {skill}
                  </p>
                );
              })}
            </div>
            <div className='testing'>
              <h3 className='testing__header'>Testing</h3>
              {testing.map((skill) => {
                return (
                  <p key={skill} className='skill'>
                    {skill}
                  </p>
                );
              })}
            </div>
            <div className='other'>
              <h3 className='other__header'>Other</h3>
              {other.map((skill) => {
                return (
                  <p key={skill} className='skill'>
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Description;
