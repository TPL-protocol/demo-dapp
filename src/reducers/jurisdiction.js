import * as ActionTypes from '../actiontypes'

const JurisdictionReducer = (state = { owner: 'undefined' }, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_JURISDICTION:
      return action.jurisdiction;
    default:
      return state
  }
};

export default JurisdictionReducer;
