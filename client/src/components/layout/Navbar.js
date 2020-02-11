import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='navbar__title'>Wine Seller</h1>
      <ul className='navbar__links'>
        <li className='navbar__link'>Home</li>
        <li className='navbar__link'>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
