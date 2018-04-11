import * as ActionTypes from '../actiontypes';

import { Jurisdiction, DummyValidator } from '../contracts';
import { JURISDICTION_ADDRESS, VALIDATOR_ADDRESS } from '../constants';

const ValidationActions = {

  checkValidated(address) {
    return async function (dispatch) {
      const jurisdiction = await Jurisdiction.at(JURISDICTION_ADDRESS);
      const isValidated = await jurisdiction.hasAttribute(address, "VALID");
      dispatch(ValidationActions.update(address, isValidated));
    }
  },

  update(address, isValidated) {
    return { type: ActionTypes.VALIDATION_UPDATED, address, isValidated };
  },

  validate(address) {
    return async function (dispatch) {
      const validator = await DummyValidator.at(VALIDATOR_ADDRESS);
      await validator.validate({ from: address });
      dispatch(ValidationActions.checkValidated(address));
    };
  },

};

export default ValidationActions;
