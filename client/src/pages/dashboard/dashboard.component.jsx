import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/user.actions';
import { isLoggedIn } from "../../utils/isLoggedIn";

import DashboardMenu from '../../components/dashboard-menu/dashboard-menu.component';
import DashboardAnnouncements from '../../components/dashboard-announcements/dashboard-announcements.component';

const Dashboard = () => {
  useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn()) {
      const request = () => dispatch(getUserInfo());
      request();
    }
  }, [dispatch]);

  return (
    <div className="dashboard-container">
      <DashboardMenu />
        <Switch>
          <Route path="/dashboard" exact component={() => <DashboardAnnouncements /> } />
        </Switch>
    </div>
  );
}

export default Dashboard;