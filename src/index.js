import React from 'react';
import ReactDOM from 'react-dom';
import './css/Root/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CursorContextProvider from './context/CursorContext';
import LoaderContextProvider from './context/LoaderContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CursorContextProvider>
        <LoaderContextProvider>
          <App />
        </LoaderContextProvider>
      </CursorContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
