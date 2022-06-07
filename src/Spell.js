import React from 'react'
import { Link } from 'react-router-dom';
import './Spell.css'
const Spell = ({name, index}) => {
  return (
    <Link to={`/${index}`} style={{ textDecoration: 'none' }}>
      <div className='spell'>
        <h2>{name}</h2>
        <img className='spell-image'src="https://static.wikia.nocookie.net/forgottenrealms/images/d/d3/Scroll-Jim_Nelson.jpg/revision/latest?cb=2019111100001"/>
      </div>
    </Link>
  )
}
export default Spell
