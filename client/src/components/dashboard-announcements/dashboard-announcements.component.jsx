import React from 'react';

const DashboardAnnouncements = () => {
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
              <h2>$Current user$</h2>
              <i class="fas fa-caret-down"></i>
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