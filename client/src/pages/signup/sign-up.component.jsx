import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ERRORS } from '../../redux/error/error.types';
import { userRegister } from '../../redux/user/user.actions';

const SignUp = () => {
  const errors = useSelector((state) => state.errors);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitRegister = async (e) => {
    e.preventDefault();

    dispatch(userRegister({ name, email, role, password }));
  }

  useEffect(() => {

    return () => {
      errors.errors = null;
      // dispatch({
      //   type: CLEAR_ERRORS,
      //   payload: {
      //     errors: null,
      //   },
      // });
    }
  }, [errors, dispatch]);

  const roles = [
    {
      value: 'Elev',
      label: 'Elev',
    },
    {
      value: 'Profesor',
      label: 'Profesor',
    },
    {
      value: 'Scoala',
      label: 'Scoala',
    }
  ];

  return (
    <div className="signup__container">
      
      <h1 className="signup__title">Înregistrare cont nou</h1>
      <form onSubmit={submitRegister} className="signup__form">
        <div className="signup__field">
          <label for="name" className="signup__label">Nume</label>
          <input className="signup__input" type="text" name="name" value={name} placeholder="Nume" onChange={e => setName(e.target.value)} />
        </div>
        <div className="signup__field">
          <label for="email" className="signup__label">Email</label>
          <input className="signup__input" type="email" name="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="signup__field">
          <label for="role" className="signup__label">Tipul contului</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={roles[0]}
            options={roles}
            onChange={e => setRole(e.value)}
          />
        </div>
        <div className="signup__field">
          <label for="psw" className="signup__label">Parola</label>
          <input className="signup__input" type="password" name="psw" value={password} placeholder="Parola" onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="signup__submit">
          Înregistrare
        </button>
        <p className="signup__already">Ai deja un cont creat? <a href="/login">Intră în contul tău.</a></p>
      </form>
      { errors.errors && <h3 className="error"> { errors.errors } </h3> }
    </div>
  );
};

export default SignUp;