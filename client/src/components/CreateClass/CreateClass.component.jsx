import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userCreateClass } from '../../redux/user/user.actions';

const CreateClass = () => {
  const [name, setName] = useState('');
  const user = useSelector(state => state.user);
  const errors = useSelector(state => state.errors);
  const dispatch = useDispatch();
  let currentUser = useSelector((state) => state.user);

  const submitCreateClass = async (e) => {
    e.preventDefault();

    dispatch(userCreateClass({ name, currentUser }));
  }

  return (
    <div className="createclass__container">
      
      <h1 className="createclass__title">Creează clasă</h1>
      <form onSubmit={submitCreateClass} className="createclass__form">
        <div className="createclass__field">
          <label for="nume" className="createclass__label">Nume</label>
          <input className="createclass__input" type="text" name="nume" value={name} placeholder="Numele clasei" onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="createclass__submit">
          Creează
        </button>
      </form>
      { errors.errors && <h3 className="error"> { errors.errors } </h3> }
    </div>
  )
};

export default CreateClass;