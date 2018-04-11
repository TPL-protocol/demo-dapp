import React, { Component } from 'react';
import { connect } from 'react-redux'
import Store from '../store'
import Alert from './Alert.react'
import NetworkActions from "../actions/network";
import Modal from "./Modal.react"
import Jurisdiction from './Jurisdiction.react';
import ValidateMe from './ValidateMe.react';

class App extends Component {

  componentWillMount() {
    Store.dispatch(NetworkActions.checkConnection())
  }

  render() {
    const network = this.props.network
    const fetching = this.props.fetching;

    return (network.connected) ?
      (fetching ?
       <Modal open={fetching} progressBar message={fetching}/> :
       <div>
         <Alert/>
         <Jurisdiction/>
         <ValidateMe/>
       </div>
      ) :
      <div>
        <Modal dark open={!network.connected} message={'Please access using MIST or Metamask'}/>
      </div>
  }
}

function mapStateToProps({ fetching, network }) {
    return { fetching, network }
}


export default connect(mapStateToProps)(App);
