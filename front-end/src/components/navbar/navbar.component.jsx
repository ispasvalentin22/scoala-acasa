import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './../../assets/scoala-acasa.svg'

import './navbar.styles.scss';

const Navbar = () => (
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
      <Link className='option' to='#'>
        Conectare
      </Link>
      <Link className='option' to='#'>
        Creează cont
      </Link>
    </div>
  </div>
);

export default Navbar;