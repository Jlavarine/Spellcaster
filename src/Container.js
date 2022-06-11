import React from 'react'
import Spell from './Spell'
import PropTypes from 'prop-types';
import './Container.css'
const Container = ({spells}) => {
  let i = 0;
  const allSpells = spells.map(spell => {
    return (
      <Spell
        name={spell.name}
        id={i += 1}
        key={i}
        url={spell.url}
        index={spell.index}
      />
    )
  })
  return (
    <div className='spell-container'>
      {allSpells}
    </div>
  )
}
export default Container

Container.propTypes = {
  spells: PropTypes.array.isRequired
};
