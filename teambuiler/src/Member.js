import React from 'react';

const Member = props => {
  return (
    <div className='member'>
      <h3>{props.info.name}</h3>
      <p>{props.info.email}</p>
      <p>{props.info.role}</p>
    </div>
  );
};

export default Member;