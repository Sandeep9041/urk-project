import {BrowserRouter,Routes,Route} from "react-router-dom"

import React from 'react';
import DonutChart from './DonutChart';
import Component from './Components/Component';

const App = () => {
  const value = 75; // Replace this with your actual value

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Component />}    /> 
    </Routes>
    </BrowserRouter>
  );
};

export default App;
