import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav'
import Container from './Container'
import DescriptionNav from './DescriptionNav'
import SpellDescription from './SpellDescription'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      spells: [],
      searchValue: '',
      searchedSpells: '',
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

  render() {
    return(
      <main className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            if(!this.state.searchValue && !this.state.searchedSpells.length) {
              return (
                <div>
                  <Nav handleChange={this.handleChange} searchValue={this.state.searchValue}/>
                  <Container spells={this.state.spells} />
                </div>
              )
            }else if (!this.state.searchedSpells.length){
              return (
                <div>
                  <Nav handleChange={this.handleChange} searchValue={this.state.searchValue}/>
                  <h2 className='no-spells-error'>Sorry! There are no spells that match your search</h2>
                </div>
              )
            }else return (
              <div>
                <Nav handleChange={this.handleChange} searchValue={this.state.searchValue}/>
                <Container spells={this.state.searchedSpells} />}
              </div>
            )
          }} />
          <Route exact path='/:spell' render={({match}) => {
            return (
              <div>
                <DescriptionNav />
                <SpellDescription spell={match.params.spell}/>
              </div>
            )
          }} />
        </Switch>
      </main>
    )
  }
}
export default App
