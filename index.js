import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' // Importing the Book component
import reportWebVitals from './reportWebVitals';
// import Api from './cinema/Api';
// import { BrowserRouter } from 'react-router-dom';
import Rock from './Rock';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Api />
    </BrowserRouter> */}
    <Rock/>
  </React.StrictMode>


);
reportWebVitals();
