import React from 'react';

const DashboardMenu = () => {
  return (
    <section className="sidemenu">
        <h2 className="sidemenu__logo">Scoala acasa</h2>
        <div className="currentuser">
          <i class="fas fa-user-circle"></i>
          <div className="currentuser__details">
            <h2>$Current user$</h2>
            <h3>Cadru didactic</h3>
          </div>
        </div>
        <div className="class-activity">
          <h3 className="class-activity-title">ACTIVITATEA LA CLASĂ</h3>
          <div className="sidemenu__homepage">
            <i class="fas fa-border-all"></i>
            <h3 className="sidemenu__homepage--h3">Pagina principală</h3>
          </div>
          <div className="sidemenu__catalogue">
            <i class="far fa-clipboard"></i>
            <h3 className="sidemenu__catalogue--title">Catalog</h3>
          </div>
          <div className="sidemenu__schedule">
            <i class="far fa-calendar-alt"></i>
            <h3 className="sidemenu__catalogue--title">Orar</h3>
          </div>
        </div>
    </section>
  )
}

export default DashboardMenu;