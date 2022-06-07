import React from 'react';
import { Link } from 'react-router-dom';

const DescriptionNav = () => {
  return(
    <nav>
      <h1 className="page-title">Spellcaster</h1>
      <div className="btn-styling">
        <Link to='/'> <button className="home-btn">Home</button> </Link>
      </div>
    </nav>
  );
};

export default DescriptionNav;
