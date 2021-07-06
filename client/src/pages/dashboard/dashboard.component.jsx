import React, { useEffect, useState } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/user.actions';
import { isLoggedIn } from '../../utils/isLoggedIn';
import { gotClass } from '../../utils/gotClass';
import axiosInstance from '../../api/axiosInstance';

import DashboardMenu from '../../components/dashboard-menu/dashboard-menu.component';
import DashboardAnnouncements from '../../components/dashboard-announcements/dashboard-announcements.component';
import Catalog from '../../components/catalog/catalog.component';
import Orar from '../../components/orar/orar.component';
import CreateClass from '../../components/CreateClass/CreateClass.component';
import { ReactComponent as NotConnected } from './../../assets/SVGs/cancel.svg';

const Dashboard = () => {
  const [currentClass, setCurrentClass] = useState('');
  let currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn()) {
      const request = () => dispatch(getUserInfo());
      request();
    }

    const fetchClass = async () =>
      await axiosInstance
        .get(`/api/classes/${currentUser.class}`)
          .then((data) => {
            setCurrentClass(data.data.data.classs);
            console.log(currentClass);
          });
    fetchClass();
  }, [dispatch]);

    if (isLoggedIn()) {
      return (
        <div className="dashboard-container">
          <Switch>
            <Route exact path="/dashboard">
              <DashboardMenu currentUser={currentUser} />
              {gotClass() ? <DashboardAnnouncements currentUser={currentUser} /> : <CreateClass currentUser={currentUser} /> }
            </Route>
            <Route path="/dashboard/catalog">
              <DashboardMenu currentUser={currentUser} />
              {gotClass() ? <Catalog currentUser={currentUser} currentClass={currentClass} /> : <CreateClass currentUser={currentUser} /> }
            </Route>
            <Route path="/dashboard/orar">
              <DashboardMenu currentUser={currentUser} />
              <Orar currentUser={currentUser} />
            </Route>

            {/* <DashboardMenu currentUser={currentUser} />
              {gotClass() ? <Route path="/dashboard" exact component={() => <DashboardAnnouncements currentUser={currentUser} /> } /> : <CreateClass currentUser={currentUser} /> }
              <Route path="/dashboard/catalog" exact component={() => <Catalog currentUser={currentUser} /> } /> */}

            {/* <Route path="/dashboard" exact component={() => <DashboardAnnouncements currentUser={currentUser} /> } /> */}
          </Switch>
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