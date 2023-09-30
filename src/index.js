import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import APP from 'components/APP/APP';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <APP />
    </BrowserRouter>
  </React.StrictMode>
);
