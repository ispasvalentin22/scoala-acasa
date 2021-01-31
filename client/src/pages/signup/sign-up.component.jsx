import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../redux/user/user.actions';

const SignUp = () => {
  const user = useSelector((state) => state.user);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitRegister = async (e) => {
    e.preventDefault();

    dispatch(userRegister({ email, password }));
  }

  return (
    <div className="signup__container">
      
      <h1 className="signup__title">Înregistrare cont nou</h1>
      <form onSubmit={submitRegister} className="signup__form">
        <div className="signup__field">
          <label for="email" className="signup__label">Email</label>
          <input className="signup__input" type="email" name="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="signup__field">
          <label for="psw" className="signup__label">Parola</label>
          <input className="signup__input" type="password" name="psw" value={password} placeholder="Parola" onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="signup__submit">
          Înregistrare
        </button>
      </form>
    </div>
  );
};

export default SignUp;