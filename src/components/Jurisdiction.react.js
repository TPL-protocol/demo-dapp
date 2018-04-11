import React, { Component } from 'react'
import { connect } from 'react-redux'

import Store from '../store'

import JurisdictionActions from '../actions/jurisdiction'
import ValidatorsList from './ValidatorsList.react'


const RootDAO = connect(({jurisdiction}) => ({jurisdiction}))((props) => {
  return <p>RootDAO: { props.jurisdiction.owner } </p>
})

class Transparency extends Component {
  componentWillMount() {
    Store.dispatch(JurisdictionActions.find())
  }

  render() {
    return (
      <div className="App">
        <h1>Jurisdiction</h1>
        <RootDAO />
        <ValidatorsList />
      </div>
    )
  }
}


export default Transparency
