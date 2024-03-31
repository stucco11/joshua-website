import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootContainer from './root-container/root-container';
import NavBar from './root-container/nav-bar/nav-bar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootContainer/>
  </React.StrictMode>
);
