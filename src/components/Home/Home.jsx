import '../../css/Home/Home.css';

const Home = () => {
  return (
    <header className='header'>
      <h1 className='intro__header'>Hi.</h1>
      <h1 className='intro__header'>
        i'm N<span className='intro__header--letter'>e</span>nad,
      </h1>
      <h1 className='intro__header'>web developer</h1>
      <h2 className='intro__sub-header'>
        Front End <span className='intro__sub-header--slash'> / </span>Back End
        Developer
      </h2>
    </header>
  );
};

export default Home;
