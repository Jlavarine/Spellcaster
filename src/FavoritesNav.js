import React from 'react';
import { Link } from 'react-router-dom';
import './DescriptionNav.css'
const FavoritesNav = () => {
  return(
    <nav className='desc-nav'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 className="page-title">Spellcaster</h1>
      </Link>
      <div className="btn-styling">
        <Link to='/'> <button className="home-btn">Home</button> </Link>
      </div>
    </nav>
  );
};

export default FavoritesNav;