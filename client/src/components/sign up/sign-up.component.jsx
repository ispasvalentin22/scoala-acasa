import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, userRegister } from '../../redux/user/user.actions';

const SignUp = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitRegister = async (e) => {
    e.preventDefault();

    dispatch(userRegister({ email, password }));
  }

  return (
    <form onSubmit={submitRegister}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label className="email-label">
        Email address
      </label>

      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label className="password-label">
        Password
      </label>

      <button type="submit" className="btn-submit">
        Register
      </button>
    </form>
  );
};

export default SignUp;