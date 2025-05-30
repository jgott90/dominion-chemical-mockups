import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <BrowserRouter basename="/dominion-chemical-mockups">
        <App />
      </BrowserRouter>
    </SearchProvider>
  </React.StrictMode>
);