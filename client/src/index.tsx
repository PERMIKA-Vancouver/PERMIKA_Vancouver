import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// fonts
import './fonts/Regola/regola-regular.ttf';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
