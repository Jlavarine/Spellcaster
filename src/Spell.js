import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Spell.css'
import magic from "./images/Spellcast.jpg";
const Spell = ({name, index, id}) => {
  return (
      <div className='spell' id={id}>
        <h2 className='spell-name'>{name}</h2>
        <Link to={`/${index}`} style={{ textDecoration: 'none' }}>
        {id % 2 == 0 ? <img className='spell-image'src="https://i.pinimg.com/originals/0f/ec/ce/0feccede3b7b4b18868110d1621bcd88.jpg" alt='An old spell book with runes and drawings flipping open.'/> : <img className='spell-image'src={`${magic}`} alt="hand creating whirling yellow magic."/>}
        </Link>
      </div>
  )
}
export default Spell

Spell.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
