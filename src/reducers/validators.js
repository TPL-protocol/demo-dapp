import * as ActionTypes from '../actiontypes'

const initialState = { list: [], validator: null }

const ValidatorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_VALIDATOR:
      let validators = state.list;
      return {...state, list: [action.validator].concat(validators)};
    default:
      return state
  }
};

export default ValidatorsReducer;
