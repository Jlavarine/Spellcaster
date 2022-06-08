import React from 'react'
import './Nav.css'
const Nav = ({filterSpells, searchValue, handleChange}) => {
  return (
    <nav>
      <div className='nav'>
        <img className='icon' src='https://pbs.twimg.com/profile_images/1192128304574275585/i9xPBsrE_400x400.jpg' />
        <h1 className='title'><span className='fast'>S</span>pell<span className='slow'>c</span>aster</h1>
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
