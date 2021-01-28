import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import SignUp from './components/sign up/sign-up.component';

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
          <div className="App">
            <Switch>
              <Route path="/" exact component={() => <HomePage />} />
              <Route path="/signup" component={() => <SignUp />} />
            </Switch>
          </div>
      </Router>
    </Provider>
  );
};

export default App;
