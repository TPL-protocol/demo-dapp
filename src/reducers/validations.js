import * as ActionTypes from '../actiontypes'

const initialState = { address: "", isValidated: false };

const ValidationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.VALIDATION_UPDATED:
      return Object.assign({}, state, { address: action.address, isValidated: action.isValidated });
    default:
      return state
  }
};

export default ValidationsReducer;
