import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/user/user.actions';
import { isLoggedIn } from '../../utils/isLoggedIn';
import { CLEAR_ERRORS } from '../../redux/error/error.types';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.user);
  const errors = useSelector(state => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitLogin = async (e) => {
    e.preventDefault();

    dispatch(userLogin({ email, password }));
    if (isLoggedIn()) { history.push("/"); }
  }

  useEffect(() => {

    return () => {
      errors.errors = null;
      dispatch({
        type: CLEAR_ERRORS,
        payload: {
          errors: null,
        },
      });
    };
  });

  return (
    <div className="login__container">
      
      <h1 className="login__title">Conectare</h1>
      <form onSubmit={submitLogin} className="login__form">
        <div className="login__field">
          <label for="email" className="login__label">Email</label>
          <input className="login__input" type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="login__field">
          <label for="psw" className="login__label">Parola</label>
          <input className="login__input" type="password" name="psw" value={password} placeholder="Parola" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login__submit">
          Conectare
        </button>
        <p className="login__redirect">Nu ai un cont? <a href="/signup">Înregistrează-te.</a></p>
      </form>
      { errors.errors && <h3 className="error"> { errors.errors } </h3> }
    </div>
  );
};

export default Login;