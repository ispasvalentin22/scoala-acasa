import React from 'react';

const DashboardAnnouncements = ({ currentUser }) => {
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
                <a href="#">Setări cont</a>
                <a href="#">Deconectare</a>
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