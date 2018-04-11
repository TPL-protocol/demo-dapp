import React, { Component } from 'react'
import { connect } from 'react-redux'

import Store from '../store'

import ValidatorsActions from '../actions/validators'

class ValidatorsList extends Component {
  componentWillMount() {
    Store.dispatch(ValidatorsActions.findAll())
  }

  render() {
    const validators = this.props.validators.list
    return (
      <div>
        <p>Validators:</p>
        { validators.length === 0 ? (
            <em>No validators</em>
          ) : (
            <ul>{this._buildValidatorsList(validators)}</ul>
          )
        }
      </div>
    )
  }

  _buildValidatorsList(validators) {
    return validators.map((validator) => {
      return (
        <li key={validator}>
          <b>{validator}</b>
        </li>
      )
    })
  }
}

function mapStateToProps({ validators }) {
    return { validators }
}

export default connect(mapStateToProps)(ValidatorsList)
