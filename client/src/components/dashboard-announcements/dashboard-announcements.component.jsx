import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/user/user.actions';
import axiosInstance from '../../api/axiosInstance';
import Announcement from '../announcement/announcement.component';
import AddStudent from '../AddStudent/AddStudent.component';

const DashboardAnnouncements = ({ currentUser }) => {
  const [className, setClassName] = useState('');
  const [announcements, setAnnouncements] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [addAnnouncement, setAddAnnountcement] = useState(false);
  const [addStudent, setAddStudent] = useState(false);

  useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(userLogout());
  };

  const currentClass = currentUser.class;
  console.log(currentClass);

  const postAnnouncements = async (e) => {
    const currentClass = currentUser.class;
    e.preventDefault();

    await axiosInstance
      .post(`/api/classes/${currentUser.class}/announcements`, {
        class: currentClass,
        title,
        description,
      })
      .then((data) => {
        setAnnouncements(data.data.data.announcement);
      });
  };

  const showAddStudent = () => {
    setAddStudent(true);
    setAddAnnountcement(false);
  };

  const showAddAnnouncement = () => {
    setAddAnnountcement(true);
    setAddStudent(false);
  };

  useEffect(() => {
    const fetchAnnouncements = async () =>
      await axiosInstance
        .get(`/api/classes/${currentUser.class}`)
        .then((data) => {
          setAnnouncements(data.data.data.classs.announcements);
          setClassName(data.data.data.classs.name);
        });
    fetchAnnouncements();
  }, []);

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
              <h2>{currentUser.name}</h2>
              <i class="fas fa-caret-down"></i>
              <div className="dropdown-content">
                <Link className="a">Setări cont</Link>
                <Link className="a" to="/" onClick={handleLogout}>
                  Deconectare
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="header-classname-container">
          <h1 className="header-classname"> {className} </h1>
          <button onClick={showAddStudent} className="student-add">
            <i class="fas fa-plus"></i>Adaugă elev
          </button>
        </div>

        <section className="announcements">
          <div className="announcements-header">
            <h2 className="announcements-header-title">Anunțuri</h2>
            {currentUser.role === 'Profesor' ? (
              <button
                onClick={showAddAnnouncement}
                className="announcements-add"
              >
                <i class="fas fa-plus"></i>Adaugă anunț
              </button>
            ) : null}
          </div>

          <div className="announcements-list">
            {announcements
              ? announcements.map((announcement) => (
                  <Announcement
                    key={announcement.id}
                    announcement={announcement}
                  />
                ))
              : null}
          </div>

          {currentUser.role === 'Profesor' && addAnnouncement ? (
            <form onSubmit={postAnnouncements} className="announcements__form">
              <div className="announcements__field">
                <label for="title" className="announcements__label">
                  Titlu anunt
                </label>
                <input
                  className="announcements__input"
                  name="title"
                  value={title}
                  placeholder="Titlu"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="announcements__field">
                <label for="description" className="announcements__label">
                  Descriere
                </label>
                <input
                  className="announcements__input"
                  name="description"
                  value={description}
                  placeholder="Descriere"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button type="submit" className="announcements__submit">
                Publică anunț
              </button>
            </form>
          ) : null}

          {addStudent && (
            <form className="announcements__form">
              <div className="announcements__field">
                <label for="name" className="announcements__label">
                  Numele elevului
                </label>
                <input
                  className="announcements__input"
                  name="name"
                  placeholder="Nume"
                />
              </div>
              <button type="submit" className="announcements__submit">
                Adaugă elev
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default DashboardAnnouncements;
