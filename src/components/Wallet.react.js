import React, { Component } from 'react';
import { connect } from 'react-redux';

import Store from '../store';
import WalletActions from "../actions/wallet";

class Wallet extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.address !== prevProps.address) {
      Store.dispatch(WalletActions.getBalance(this.props.address));
    }
  }

  render() {
    return (
      <div>
        <p>I have { this.props.balance.toString() } tokens.</p>
        <button onClick={ () => this.buyTokens(this.props.address) }>Buy 0.1 ether</button>
      </div>
    );
  }

  buyTokens(address) {
    Store.dispatch(WalletActions.buy(address));
  }


}

function mapStateToProps({ accounts, wallet }) {
  return { address: accounts.address, balance: wallet.balance };
}

export default connect(mapStateToProps)(Wallet);
