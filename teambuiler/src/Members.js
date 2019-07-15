import React from 'react';

import Member from './Member';

import { Link } from 'react-router-dom';

const Members = props => {
  return (
    <div className='members'>
      {props.members.length === 0 ? <p>There are no members to show! <Link to='/add'>Click here to add one!</Link></p> : (
        props.members.map(member => <Member key={member.id} delete={props.delete} update={props.update} info={member} />)
      )}
    </div>
  );
};

export default Members;