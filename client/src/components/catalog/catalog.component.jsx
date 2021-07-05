import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux/user/user.actions';
import { getUserInfo } from '../../redux/user/user.actions';
import { getUserClass } from '../../redux/user/user.actions';
import axiosInstance from '../../api/axiosInstance';
import Student from './../student/student.component';

const Catalog = ({ currentUser }) => {
  const [className, setClassName] = useState('');
  // const [currentClass, setCurrentClass] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [currentDiscipline, setCurrentDiscipline] = useState('');
  // const [currentDiscipline, setCurrentDiscipline] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(userLogout());
  };

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getUserClass({ currentUser }));

    const fetchClass = async () =>
      await axiosInstance
        .get(`/api/classes/${currentUser.class}`)
        .then((data) => {
          console.log(data.data.data.classs);
          setClassName(data.data.data.classs.name);
          // setCurrentClass(data.data.data.classs);
        });
    fetchClass();
  }, []);

  const submitNewDiscipline = async (e) => {
    e.preventDefault();

    await axiosInstance
      .post(`/api/classes/${currentUser.class}/disciplines`, {
        name: discipline,
        class: currentUser.class,
      })
      .then((data) => {
        closeModal();
      });
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '5rem 8rem',
    },
    overlay: {
      backgroundColor: '#000000',
      opacity: '0.5',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const disciplines = [
    {
      value: 'Română',
      label: 'Română',
    },
    {
      value: 'Matematică',
      label: 'Matematică',
    },
    {
      value: 'Istorie',
      label: 'Istorie',
    },
    {
      value: 'Geografie',
      label: 'Geografie',
    },
    {
      value: 'Biologie',
      label: 'Biologie',
    },
  ];

  let currentClassDisciplines = [];
  currentUser.currentClass.disciplines.forEach((discipline) => {
    let object = {
      value: discipline.name,
      label: discipline.name,
    };
    currentClassDisciplines.push(object);
  });

  return (
    <div className="catalog-wrapper">
      <div className="miniheader">
        <h1 className="miniheader__title">Catalog</h1>
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
        {currentUser.role === 'Profesor' ? (
          <button onClick={openModal} className="student-add">
            <i class="fas fa-plus"></i>Adaugă disciplină
          </button>
        ) : null}
      </div>

      <Select
        className="react-select-container2"
        classNamePrefix="react-select"
        defaultValue={currentClassDisciplines[0]}
        options={currentClassDisciplines}
        onChange={(e) => setCurrentDiscipline(e.value)}
      />

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="discipline-form-title">Adaugă o disciplină nouă</div>
          <form onSubmit={submitNewDiscipline} className="discipline-form">
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              defaultValue={disciplines[0]}
              options={disciplines}
              onChange={(e) => setDiscipline(e.value)}
            />
            <button className="discipline-form-submit" type="submit">
              Adaugă disciplină
            </button>
            <button onClick={closeModal} className="discipline-form-cancel">
              Închide
            </button>
          </form>
        </Modal>
      </div>

      <section className="catalog">
        <div className="catalog-header">
          <div>Nume</div>
          <div>Număr de note</div>
          <div>Număr de absențe</div>
          <button>Acțiuni</button>
        </div>
        <div className="catalog-content">
          <div className="students-list">
            {/* {currentUser.currentClass.} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
