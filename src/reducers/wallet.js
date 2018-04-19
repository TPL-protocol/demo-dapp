import * as ActionTypes from '../actiontypes';

const initialState = { address: "", balance: 0 };

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.BALANCE_UPDATED:
    return Object.assign({}, state, { address: action.address, balance: action.balance });
    default:
      return state;
  }
};

export default WalletReducer;
