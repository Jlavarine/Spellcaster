import React from 'react'
import './Nav.css'
const Nav = ({filterSpells, searchValue, handleChange}) => {
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
      </div>
    </nav>
  )
}
export default Nav
