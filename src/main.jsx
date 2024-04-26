import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GetSingleDataProvider } from './helpers/useSingleContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GetSingleDataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GetSingleDataProvider>
);
