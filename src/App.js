import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderContext } from './context/LoaderContext';
import './css/Root/App.css';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader';
import Home from './components/Home/Home';
import About from './components/About/About';
import Cursor from './components/Cursor';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const { isLoaded } = useContext(LoaderContext);

  return (
    <div className='app'>
      <Nav />
      <Cursor />
      {!isLoaded ? (
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
