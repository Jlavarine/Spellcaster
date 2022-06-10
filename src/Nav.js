import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = ({filterSpells, searchValue, handleChange, resetSearch}) => {
  return (
    <nav>
      <div className='nav'>
        <h1 className='title'>Spellcaster</h1>
        <form>
          <input
          className='spell-search'
          type='text'
          name='name'
          placeholder='Search for a spell...'
          value={searchValue}
          onChange={(event) => {
            handleChange(event)
          }}
          />
        </form>
        <Link to='/favorites'><button className="favorites-btn" onClick={resetSearch}>Favorites</button></Link>
      </div>
    </nav>
  )
}
export default Nav
