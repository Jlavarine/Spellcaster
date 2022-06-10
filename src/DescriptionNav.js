import React from 'react';
import { Link } from 'react-router-dom';
import './DescriptionNav.css'
const DescriptionNav = () => {
  return(
    <nav className='desc-nav'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 className="page-title">Spellcaster</h1>
      </Link>
      <div className="btn-styling">
        <Link to='/'> <button className="home-btn">Home</button> </Link>
        <Link to='/favorites'><button className="favorites-btn">Favorites</button></Link>
      </div>
    </nav>
  );
};

export default DescriptionNav;
