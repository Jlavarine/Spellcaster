import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav'
import Container from './Container'
import DescriptionNav from './DescriptionNav'
import FavoritesNav from './FavoritesNav'
import SpellDescription from './SpellDescription'
import Error from './Error'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      spells: [],
      searchValue: '',
      searchedSpells: '',
      favoritedSpells: [],
      error: ''
    }
  }

  componentDidMount = () => {
    this.getSpells()
  }

  getSpells = () => {
  fetch('https://www.dnd5eapi.co/api/spells')
  .then(resp => {
    if(!resp.ok) {
      this.setState({error: 'Something went wrong!'})
    }else if(resp.ok) {
      return resp.json()
    }
  })
  .then(data => this.setState({spells: data.results}))
  .catch(error => console.log(error))
  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value})
    const filteredSpells = this.state.spells.filter(spell =>  spell.name.toLowerCase().includes(event.target.value.toLowerCase()) === true)
    this.setState({searchedSpells: filteredSpells})
  }

  checkForMatchingSpell = (url) => {
    let match = [];
    this.state.spells.forEach(spell =>  {
      if(spell.index.toLowerCase() === url) {
        match.push(true)
      } else {
        match.push(false)
      }
    })
    return match.every((element) => element === false)
  }

  addFavorite = (favSpell) => {
    const favoriteSpell = this.state.spells.find(spell => spell.index === favSpell)
    this.setState({favoritedSpells: [...this.state.favoritedSpells, favoriteSpell]})
  }

  checkFavorite = (favSpell) => {
    let value = [];
      this.state.favoritedSpells.forEach(element => {
        if (element.index === favSpell) {
          value.push(true);
        } else {
          value.push(false)
        }
      })
    return value.every(e => e === false)
  };

  resetSearch = () => {
    this.setState({searchValue: '', searchedSpells: ''})
  }

  render() {
    if(this.state.error) {
      return (
        <h2 className='load-error'>The spellbook is still being translated. Please refresh the page.</h2>
      )
    } else return(
      <main className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            if(!this.state.searchValue && !this.state.searchedSpells.length) {
              return (
                <div>
                  <Nav handleChange={this.handleChange} searchValue={this.state.searchValue} resetSearch={this.resetSearch}/>
                  <Container spells={this.state.spells} />
                </div>
              )
            }else if (!this.state.searchedSpells.length){
              return (
                <div>
                  <Nav handleChange={this.handleChange} searchValue={this.state.searchValue} resetSearch={this.resetSearch}/>
                  <h2 className='no-spells-error'>Sorry! There are no spells that match your search.</h2>
                </div>
              )
            }else return (
              <div>
                <Nav handleChange={this.handleChange} searchValue={this.state.searchValue} resetSearch={this.resetSearch}/>
                <Container spells={this.state.searchedSpells} />}
              </div>
            )
          }} />
          <Route exact path='/favorites' render={() => {
            return (
              <div>
                <FavoritesNav resetSearch={this.resetSearch}/>
                <Container spells={this.state.favoritedSpells}/>
              </div>
            )
          }} />
          <Route path='/:spell' render={({match}) => {
            if(!this.checkForMatchingSpell(match.params.spell)) {
              return (
                <div>
                  <DescriptionNav  resetSearch={this.resetSearch}/>
                  <SpellDescription spell={match.params.spell} addFavorite={this.addFavorite} checkFavorite={this.checkFavorite}/>
                </div>
              )
            } else {
              return (
                <Error />
              )
            }
          }} />
        </Switch>
      </main>
    )
  }
}
export default App
