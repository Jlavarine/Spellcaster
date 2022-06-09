import React, { Component } from 'react'
import './SpellDescription.css'
import imgAbjuration from "./images/Abjuration.jpg";
import imgConjuration from "./images/Conjuration.jpg";
import imgDivination from "./images/Divination.jpg";
import imgEnchantment from "./images/Enchantment.jpg";
import imgEvocation from "./images/Evocation.jpg";
import imgIllusion from "./images/Illusion.jpg";
import imgNecromancy from "./images/Necromancy.jpg";
import imgTransmutation from "./images/Transmutation.jpg";
import spellcast from "./images/Spellcast.jpg";

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
    console.log(data.school.name)
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

  getUniqueImage = () => {
    let image;
    const expr = this.state.spell.school
      switch (expr) {
        case 'Abjuration':
          image = imgAbjuration
      break;
        case 'Conjuration':
          image = imgConjuration
      break;
        case 'Divination':
          image = imgDivination
      break;
        case 'Enchantment':
          image = imgEnchantment
      break;
        case 'Evocation':
        image = imgEvocation
      break;
        case 'Illusion':
          image = imgIllusion
      break;
        case 'Necromancy':
          image = imgNecromancy
      break;
        case 'Transmutation':
          image = imgTransmutation
      break;
        default:
        image = null
    }
    return image
}

  render() {
    return (
      <section>
        <div className='image-box'>
          <img className='school-img' src={this.getUniqueImage()}/>
        </div>
        <div className='description-box'>
          <h2 className='spell-name-desc'>{this.state.spell.name}</h2>
          <p className='casters'>Casters: {this.state.spell.casters}</p>
          <p className='components'>Components: {this.state.spell.components}</p>
          <p className='desc'>Description: {this.state.spell.description}</p>
          <p className='casting-time'>Casting Time: {this.state.spell.castingTime}</p>
          <p className='range'>Range: {this.state.spell.range}</p>
          <p className='school'>School: {this.state.spell.school}</p>
        </div>
      </section>
    )
  }
}
export default SpellDescription
