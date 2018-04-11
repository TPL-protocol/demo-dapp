import * as ActionTypes from '../actiontypes'

const AlertActions = {
  showError(error, message = null) {
    console.error(error)
    return { type: ActionTypes.SHOW_ERROR, message: (message || error.message) }
  },

  reset() {
    return { type: ActionTypes.RESET_ERROR }
  }
}

export default AlertActions
