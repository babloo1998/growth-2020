import React from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from  'react-router-dom';
import routes from './routes';

function App() {
  return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
  );
}

export default App;
