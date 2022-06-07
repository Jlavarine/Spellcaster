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
  .catch(error => console.log('Something went wrong!'))
}

  render() {
    return(
      <main className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <div>
                <Nav />
                <Container spells={this.state.spells} />
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
