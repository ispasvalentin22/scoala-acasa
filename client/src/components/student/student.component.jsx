import React from 'react';

const Student = ({ student }) => {
  return (
    <div className="student-container">
      <h2 className="student-name"> {student.name} </h2>
      <h2 className="student-grades">0</h2>
      <h2 className="student-absente">0</h2>
    </div>
  );
};

export default Student;