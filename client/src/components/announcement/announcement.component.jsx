import React from 'react';

const Announcement = ({ announcement }) => {
  return (
    <div className='announcement-container'>
      <h2> {announcement.title} </h2>
      <p> {announcement.description} </p>
    </div>
  )
}

export default Announcement;