import React, { Component } from 'react'
import './SpellDescription.css'
class SpellDescription extends Component {
  constructor(props) {
    super(props)
    this.state= {
      spell: {},
      error: ''
    }
  }

  componentDidMount = () => {
    this.getSpellDescription()
  }
  spellDescriptionCleaner = (data) => {
    console.log(data)
    let allCasters = []
    data.classes.forEach(caster => allCasters.push(caster.name))
    let allComponents = []
    data.components.forEach(component => allComponents.push(component))
    return {
      name: data.name,
      casters: allCasters.join(', '),
      castingTime: data.casting_time,
      range: data.range,
      components: allComponents.join(', '),
      description: data.desc[0],
      school: data.school.name
    };
  }
  getSpellDescription = () => {
    fetch(`https://www.dnd5eapi.co/api/spells/${this.props.spell}`)
    .then(resp => {
      if(!resp.ok) {
        this.setState({error: 'Something went wrong!'})
      }else if(resp.ok) {
        return resp.json()
      }
    })
    .then(data => this.spellDescriptionCleaner(data))
    .then(data => this.setState({spell: data}))
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div className='description-box'>
        <h2 className='spell-name'>{this.state.spell.name}</h2>
        <p className='casters'>Casters: {this.state.spell.casters}</p>
        <p className='components'>Components: {this.state.spell.components}</p>
        <p className='desc'>Description: {this.state.spell.description}</p>
        <p className='casting-time'>Casting Time: {this.state.spell.castingTime}</p>
        <p className='range'>Range: {this.state.spell.range}</p>
        <p className='school'>School: {this.state.spell.school}</p>
      </div>
    )
  }
}
export default SpellDescription
