import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderContext } from './context/LoaderContext';
import CursorContextProvider from './context/CursorContext';
import './css/Root/App.css';
import Main from './components/Main';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader';
import Home from './components/Home/Home';
import About from './components/About/About';
import Cursor from './components/Cursor';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='app'>
      <CursorContextProvider>
        <LoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
          <Nav />
          <Cursor />
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
      </CursorContextProvider>
    </div>
  );
}

export default App;
