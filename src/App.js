import { useState } from 'react';
import { LoaderContext } from './context/LoaderContext';
import './css/App.css';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='app'>
      <LoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
        <Nav />
        {!isLoaded ? <Main /> : <Loader />}
      </LoaderContext.Provider>
    </div>
  );
}

export default App;
