import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = ({ currentUser }) => {
  return (
    <section className="sidemenu">
        <a href="/"><h2 className="sidemenu__logo">Scoala acasa</h2></a>
        <div className="currentuser">
          <i class="fas fa-user-circle"></i>
          <div className="currentuser__details">
            <h2>{ currentUser.name }</h2>
            <h3>{ currentUser.role }</h3>
          </div>
        </div>
        <div className="class-activity">
          <h3 className="class-activity-title">ACTIVITATEA LA CLASĂ</h3>
          <Link to='/dashboard'>
            <div className="sidemenu__homepage">
              <i class="fas fa-border-all"></i>
              <h3 className="sidemenu__homepage--h3">Pagina principală</h3>
            </div>
          </Link>
          <Link to='/dashboard/catalog'>
          <div className="sidemenu__catalogue">
            <i class="far fa-clipboard"></i>
            <h3 className="sidemenu__catalogue--title">Catalog</h3>
          </div>
          </Link>
          <Link to='/dashboard/orar'>
          <div className="sidemenu__schedule">
            <i class="far fa-calendar-alt"></i>
            <h3 className="sidemenu__catalogue--title">Orar</h3>
          </div>
          </Link>
        </div>
    </section>
  )
}

export default DashboardMenu;