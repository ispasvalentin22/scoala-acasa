import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import SignUp from './pages/signup/sign-up.component';
import Login from './pages/login/login.component';
import Dashboard from './pages/dashboard/dashboard.component';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
            <Switch>
              <Route path="/dashboard" component={() => <Dashboard />} />
              <div>
                <Navbar />
                <Route path="/" exact component={() => <HomePage />} />
                <Route path="/signup" component={() => <SignUp />} />
                <Route path="/login" component={() => <Login />} />
              </div>
            </Switch>
          </div>
      </Router>
    </Provider>
  );
};

export default App;
