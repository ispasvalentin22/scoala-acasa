import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/user.actions';

const Dashboard = () => {
  return (
    <section className="sidemenu">
      <h2 className="sidemenu__app">Scoala acasa</h2>
      <div className="currentuser">
        <i class="fas fa-user-circle"></i>
        <div className="currentuser__details">
          <h2>Current user</h2>
          <h3>Cadru didactic</h3>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;