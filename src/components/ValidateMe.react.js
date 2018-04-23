import React, { Component } from 'react';
import { connect } from 'react-redux'

import ValidationActions from "../actions/validation";

class ValidateMe extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.address !== prevProps.address) {
      this.props.checkValidated(this.props.address);
    }
  }

  render() {
    return (
      <div>
        <p>Am I validated? { this.props.isValidated ? "Yes" : "No" }</p>
        <button onClick={ () => this.props.validate(this.props.address) }>Validate me</button>
      </div>
    )
  }

}

function mapStateToProps({ accounts, validations }) {
  return { address: accounts.address, isValidated: validations.isValidated };
}

export default connect(
  mapStateToProps,
  ValidationActions
)(ValidateMe);
