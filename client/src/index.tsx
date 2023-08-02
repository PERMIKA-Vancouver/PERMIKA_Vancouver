import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// fonts
import './fonts/Regola/regola-regular.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
