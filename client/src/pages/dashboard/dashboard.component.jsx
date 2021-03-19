import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/user.actions';
import { isLoggedIn } from "../../utils/isLoggedIn";

import DashboardMenu from '../../components/dashboard-menu/dashboard-menu.component';
import DashboardAnnouncements from '../../components/dashboard-announcements/dashboard-announcements.component';

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
          <Switch>
            <Route path="/dashboard" exact component={() => <DashboardAnnouncements currentUser={currentUser} /> } />
          </Switch>
        </div>
      );
    } else {
      return (
        <h1>Trebuie să fii conectat pentru a accesa această pagină!</h1>
      )
    }
}

export default Dashboard;