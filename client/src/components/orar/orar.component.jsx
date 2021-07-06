import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { userLogout } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Orar = ({ currentUser }) => {
  const [weekdays, setWeekdays] = useState({
    luni: ['', '', '', '', '', '', ''],
    marti: ['', '', '', '', '', '', ''],
    miercuri: ['', '', '', '', '', '', ''],
    joi: ['', '', '', '', '', '', ''],
    vineri: ['', '', '', '', '', '', '']
  });

  const [materie1, setMaterie1] = useState('');
  const [materie2, setMaterie2] = useState('');
  const [materie3, setMaterie3] = useState('');
  const [materie4, setMaterie4] = useState('');
  const [materie5, setMaterie5] = useState('');
  const [materie6, setMaterie6] = useState('');
  const [materie7, setMaterie7] = useState('');

  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState(false);
  const handleToggleModal = () => setToggleModal(!toggleModal);
  const [currentDay, setCurrentDay] = useState('luni');

  const adaugareOrar = () => {

    const orarNou = [ materie1, materie2, materie3, materie4, materie5, materie6, materie7 ];

    const newWeekdays = { ...weekdays };    
    newWeekdays[currentDay] = orarNou;

    setWeekdays(newWeekdays);
    localStorage.setItem('orar', JSON.stringify(newWeekdays));
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(userLogout());
  };

  useEffect(() => {
    const orar = localStorage.getItem('orar');

    if (orar !== null) {
      setWeekdays(JSON.parse(orar));
    }
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '5rem 8rem',
      zIndex: '1',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  };

  return (
    <div className="orar-wrapper">
      <div className="miniheader">
        <h1 className="miniheader__title">Orar</h1>
        {/* <h1 className="header-classname-orar"> {currentUser.currentClass.name} </h1> */}
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
      
      <section className="orar">
        <div className="table">
        <div className="table-header">
          <p className="th">Ora</p>
          <p
            className="th"
            onClick={() => {
              setCurrentDay('luni');
              handleToggleModal();
            }}
          >
            Luni
          </p>
          <p
            className="th"
            onClick={() => {
              setCurrentDay('marti');
              handleToggleModal();
            }}
          >
            Marti
          </p>
          <p
            className="th"
            onClick={() => {
              setCurrentDay('miercuri');
              handleToggleModal();
            }}
          >
            Miercuri
          </p>
          <p
            className="th"
            onClick={() => {
              setCurrentDay('joi');
              handleToggleModal();
            }}
          >
            Joi
          </p>
          <p
            className="th"
            onClick={() => {
              setCurrentDay('vineri');
              handleToggleModal();
            }}
          >
            Vineri
          </p>
        </div>

        <div className="table-body">
          <div className="table-body-col">
            <p className="td">08</p>
            <p className="td">09</p>
            <p className="td">10</p>
            <p className="td">11</p>
            <p className="td">12</p>
            <p className="td">13</p>
            <p className="td">14</p>
          </div>

          <div className="table-body-col">
            {weekdays.luni?.map(materie => (
              <p className="td">{materie}</p>
            ))}
          </div>

          <div className="table-body-col">
            {weekdays.marti?.map(materie => (
              <p className="td">{materie}</p>
            ))}
          </div>

          <div className="table-body-col">
            {weekdays.miercuri?.map(materie => (
              <p className="td">{materie}</p>
            ))}
          </div>

          <div className="table-body-col">
            {weekdays.joi?.map(materie => (
              <p className="td">{materie}</p>
            ))}
          </div>

          <div className="table-body-col">
            {weekdays.vineri?.map(materie => (
              <p className="td">{materie}</p>
            ))}
          </div>
        </div>
      </div>
      </section>
      <Modal
        isOpen={!!toggleModal}
        onRequestClose={handleToggleModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        style={customStyles}
      >
        <div className="table">
          <div className="table-header">
            <p className="th">#</p>
            <p className="th" onClick={() => adaugareOrar(currentDay)}>
              {currentDay}
            </p>
          </div>

          <div className="table-body">
            <div className="table-body-col">
              <p className="td">08</p>
              <p className="td">09</p>
              <p className="td">10</p>
              <p className="td">11</p>
              <p className="td">12</p>
              <p className="td">13</p>
              <p className="td">14</p>
            </div>

            <div className="table-body-col">
              <div>
                <p className="td">
                  <input onChange={(e) => setMaterie1(e.target.value)} placeholder={'materie1'}></input>
                </p>
              </div>
              <div>
                <p className="td">
                  <input onChange={(e) => setMaterie2(e.target.value)} placeholder={'materie2'}></input>
                </p>
              </div>
              <div>
                <p className="td">
                  <input onChange={(e) => setMaterie3(e.target.value)} placeholder={'materie3'}></input>
                </p>
              </div>
              <div>
                <p className="td">
                  <input onChange={(e) => setMaterie4(e.target.value)} placeholder={'materie4'}></input>
                </p>
              </div>
              <div>
                <p className="td">
                  <input onChange={(e) => setMaterie5(e.target.value)} placeholder={'materie5'}></input>
                </p>
              </div>
              <div>
                <p className="td">
                  <input onChange={(e) => setMaterie6(e.target.value)} placeholder={'materie6'}></input>
                </p>
              </div>
              <div>
                <p className="td">
                  <input onChange={(e) => setMaterie7(e.target.value)} placeholder={'materie7'}></input>
                </p>
              </div>
            </div>
          </div>

          <button onClick={() => {adaugareOrar(); handleToggleModal()}} className="submit-orar">Adaugare orar</button>
        </div>
      </Modal>
      ;
    </div>
  );
};

export default Orar;
