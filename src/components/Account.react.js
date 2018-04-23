import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountActions from "../actions/accounts";

class Account extends Component {

  componentWillMount() {
    this.props.findAccount();
  }

  render() {
    return (
      <div>
        <p>My address is { this.props.address }</p>
      </div>
    );
  }

}

function mapStateToProps({ accounts }) {
  return { address: accounts.address };
}

export default connect(
  mapStateToProps,
  AccountActions
)(Account);
