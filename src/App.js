import React from 'react';
import './App.scss';

import Calculator from './Containers/Calculator/Calculator';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>
  )
}

export default App;
