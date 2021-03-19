import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/user/user.actions';

const DashboardAnnouncements = ({ currentUser }) => {
  useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(userLogout());
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard__main">
        <div className="miniheader">
          <h1 className="miniheader__title">Pagina principală</h1>
          <div className="currentuser-header">
            <i class="far fa-comments"></i>
            <i class="far fa-bell"></i>
            <div className="currentuser-header-info">
              <i class="fas fa-user-circle"></i>
              <h2>{ currentUser.name }</h2>
              <i class="fas fa-caret-down"></i>
              <div className="dropdown-content">
                <Link className="a">Setări cont</Link>
                <Link className="a" to="/" onClick={handleLogout}>Deconectare</Link>
              </div>
            </div>
          </div>
        </div>

        <section className="announcements">
          <div className="announcements-header">
            <h2 className="announcements-header-title">Anunțuri</h2>
            <button className="announcements-add"><i class="fas fa-plus"></i>Adaugă anunț</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardAnnouncements;