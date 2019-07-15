import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink exact to='/' className='nav-link' activeClassName='active'>Members</NavLink>
      <NavLink to='/add' className='nav-link' activeClassName='active'>Add New Member</NavLink>
    </div>
  );
};

export default Navbar;