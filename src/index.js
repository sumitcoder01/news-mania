import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewsState from './context/news/NewsState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <NewsState>
    <App />
    </NewsState>
  </React.StrictMode>
);

