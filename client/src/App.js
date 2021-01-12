import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>

  );
};

export default App;
