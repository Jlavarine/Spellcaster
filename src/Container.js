import React from 'react'
import Spell from './Spell'
const Container = ({spells}) => {
  let i = 0;
  const allSpells = spells.map(spell => {
    return (
      <Spell
        name={spell.name}
        id={i += 1}
        key={i}
        url={spell.url}
      />
    )
  })
  return (
    <div>
      {allSpells}
    </div>
  )
}
export default Container
