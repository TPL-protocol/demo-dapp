import * as ActionTypes from '../actiontypes';
import Network from '../network'

import { SampleCrowdsale } from '../contracts';
import { SAMPLE_CROWDSALE_ADDRESS } from '../constants';
import { SAMPLE_TOKEN_ADDRESS } from '../constants';
import { SampleToken, } from '../contracts';



const WalletActions = {

  getBalance(address) {
    return async function (dispatch) {
      const sampleToken = await SampleToken.at(SAMPLE_TOKEN_ADDRESS);
      const balance = await sampleToken.balanceOf(address);
      dispatch(WalletActions.updateBalance(address, balance));
    };
  },

  updateBalance(address, balance) {
    return { type: ActionTypes.BALANCE_UPDATED, address, balance };
  },


  buy(address) {
    return async function (dispatch) {
      const sampleCrowdsale = await SampleCrowdsale.at(SAMPLE_CROWDSALE_ADDRESS);
      await sampleCrowdsale.sendTransaction({ from: address, value: Network.web3().toWei(0.1, "ether") });
      dispatch(WalletActions.getBalance(address));
    };
  },

};

export default WalletActions;
