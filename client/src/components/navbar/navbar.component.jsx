import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './../../assets/scoala-acasa.svg';

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
      <Link className='signin' to='#'>
        Conectare
      </Link>
      <Link className='signup' to='#'>
        Creează cont
      </Link>
    </div>
  </div>
);

export default Navbar;