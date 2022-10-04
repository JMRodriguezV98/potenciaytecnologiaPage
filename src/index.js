import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './containers/home/Home';
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);