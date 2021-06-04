import React from 'react';

const Announcement = ({ announcement }) => {
  return (
    <div className="announcement-container">
      <h2 className="announcement-title"> {announcement.title} </h2>
      <p className="announcement-description"> {announcement.description} </p>
      <p className="announcement-date">
        {announcement.createdAt.split('T')[0]}
      </p>
    </div>
  );
};

export default Announcement;
