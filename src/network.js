import Web3 from 'web3';
import { PROVIDER } from 'constants'

const Network = {

  web3() {
    return new Web3(this.provider())
  },

  eth() {
    return this.web3().eth;
  },

  provider() {
    if (typeof window.web3 !== 'undefined') {
      return window.web3.currentProvider
    } else {
      return new Web3.providers.HttpProvider(PROVIDER)
    }
  },

  getAccounts() {
    return new Promise(function (resolve, reject) {
      Network.eth().getAccounts(Network._web3Callback(resolve, reject))
    });
  },

  _web3Callback(resolve, reject) {
    return function (error, value) {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    }
  }

}

export default Network
