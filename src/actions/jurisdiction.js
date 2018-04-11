import * as ActionTypes from '../actiontypes'

import { Jurisdiction } from '../contracts'
import { JURISDICTION_ADDRESS } from '../constants'

const JurisdictionActions = {

  find() {
    return async function(dispatch) {
      const jurisdiction = await Jurisdiction.at(JURISDICTION_ADDRESS)
      dispatch(JurisdictionActions.receive(jurisdiction))
    }
  },

  receive(jurisdiction) {
    return async function(dispatch) {
      const owner = (await jurisdiction.owner()).toString()
      dispatch({
        type: ActionTypes.RECEIVE_JURISDICTION,
        jurisdiction: { owner },
      })
    }
  },
}

export default JurisdictionActions
