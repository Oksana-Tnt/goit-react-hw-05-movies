import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import APP from 'components/APP/APP';
import { BrowserRouter } from 'react-router-dom';
import Context from 'Context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Context>
      <APP />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
