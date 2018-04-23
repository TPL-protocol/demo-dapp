import React, { Component } from 'react';
import { connect } from 'react-redux';

import WalletActions from "../actions/wallet";

class Wallet extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.address !== prevProps.address) {
      this.props.getBalance(this.props.address);
    }
  }

  render() {
    return (
      <div>
        <p>I have { this.props.balance.toString() } tokens.</p>
        <button onClick={ () => this.props.buyTokens(this.props.address) }>Buy 0.1 ether</button>
      </div>
    );
  }

}

function mapStateToProps({ accounts, wallet }) {
  return { address: accounts.address, balance: wallet.balance };
}

export default connect(
  mapStateToProps,
  WalletActions
)(Wallet);
