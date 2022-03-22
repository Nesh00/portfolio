import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderContext } from './context/LoaderContext';
import './css/Root/App.css';
import Main from './components/Main';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader';
import Home from './components/Home/Home';
import About from './components/About/About';
import Cursor from './components/Cursor';

function App() {
  const { isLoaded } = useContext(LoaderContext);

  return (
    <div className='app'>
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
    </div>
  );
}

export default App;
