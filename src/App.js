import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderContext } from './context/LoaderContext';
import './css/App.css';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader';
import Home from './components/Main/Home';
import About from './components/About/About';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='app'>
      <LoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
        <Nav />
        {!isLoaded ? (
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        ) : (
          <Loader />
        )}
      </LoaderContext.Provider>
    </div>
  );
}

export default App;
