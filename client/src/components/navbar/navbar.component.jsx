import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../../utils/isLoggedIn';
import { userLogout } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from './../../assets/scoala-acasa.svg';

const Navbar = () => {
  useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(userLogout());
  };

  const renderLinks = () => {
    if (isLoggedIn()) {
      return (
        <Link className='logout' to='/' onClick={handleLogout}>Log out</Link>
      );
    } else {
      return (
        <div className='account__options'>
          <Link className='signin' to='/login'>
            Conectare
          </Link>
          <Link className='signup' to='/signup'>
            Creează cont
          </Link>
        </div>
      )
    }
  }

  return (
    <div className='navbar'>
      <Link className='logo-container' to="/">
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='#'>
          Despre noi
        </Link>
        <Link className='option' to='#'>
          Funcționalități
        </Link>
        <Link className='option' to='#'>
          Contact
        </Link>
        <div className='logged-links'>
          {renderLinks()}
        </div>
      </div>
    </div>
  );
  };

export default Navbar;