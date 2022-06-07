import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <nav>
      <div className='nav'>
        <img className='icon' src='https://pbs.twimg.com/profile_images/1192128304574275585/i9xPBsrE_400x400.jpg' />
        <h1 className='title'><span className='fast'>S</span>pell<span className='slow'>c</span>aster</h1>
        <select className='dropdown'>
          <option value="">Please choose a class</option>
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Rogue">Rogue</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select>
      </div>
    </nav>
  )
}
export default Nav
