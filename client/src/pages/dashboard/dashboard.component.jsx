import React, { useEffect } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/user.actions';
import { isLoggedIn } from '../../utils/isLoggedIn';
import { gotClass } from '../../utils/gotClass';

import DashboardMenu from '../../components/dashboard-menu/dashboard-menu.component';
import DashboardAnnouncements from '../../components/dashboard-announcements/dashboard-announcements.component';
import CreateClass from '../../components/CreateClass/CreateClass.component';
import { ReactComponent as NotConnected } from './../../assets/SVGs/cancel.svg';

const Dashboard = () => {
  let currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn()) {
      const request = () => dispatch(getUserInfo());
      request();
    }
  }, [dispatch]);

    if (isLoggedIn()) {
      return (
        <div className="dashboard-container">
          <DashboardMenu currentUser={currentUser} />
            {gotClass() ? <Route path="/dashboard" exact component={() => <DashboardAnnouncements currentUser={currentUser} /> } /> : <CreateClass currentUser={currentUser} /> }
            
          {/* <Route path="/dashboard" exact component={() => <DashboardAnnouncements currentUser={currentUser} /> } /> */}
        </div>
      );
    } else {
      return (
        <div className="notconnected-page">
          <NotConnected className="notconnected-logo" />
          <h1 className="notconnected-header">Trebuie să fii conectat pentru a accesa această pagină!</h1>
          <Link to="/login"><button className="notconnected-login">Conectează-te</button></Link>       
        </div>
      )
    }
}

export default Dashboard;