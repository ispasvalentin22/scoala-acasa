import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>

  );
};

export default App;
