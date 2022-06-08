import React from 'react'
import { Link } from 'react-router-dom';
import './Spell.css'
const Spell = ({name, index, id}) => {
  return (
    <Link to={`/${index}`} style={{ textDecoration: 'none' }}>
      <div className='spell' id={id}>
        <h2 className='spell-name'>{name}</h2>
        <img className='spell-image'src="https://i.pinimg.com/originals/0f/ec/ce/0feccede3b7b4b18868110d1621bcd88.jpg"/>
      </div>
    </Link>
  )
}
export default Spell
