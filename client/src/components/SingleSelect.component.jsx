import React, { Fragment } from 'react'
import Select from 'react-select';

const SingleSelect = ({ doChange }) => {
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
    <Fragment>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        defaultValue={roles[0]}
        options={roles}
      />
    </Fragment>
  )
}

export default SingleSelect;