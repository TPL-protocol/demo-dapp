import Network from '../network'
import AlertActions from './alerts'
import * as ActionTypes from '../actiontypes'

const AccountActions = {
   
  findAccount() {
    return async function(dispatch) {
      try {
        const addresses = await Network.getAccounts()
        const mainAddress = addresses[0]
        dispatch(AccountActions.receiveAccount(mainAddress))
      } catch(error) {
        dispatch(AlertActions.showError(error))
      }
    }
  },

  receiveAccount(address) {
    return { type: ActionTypes.RECEIVE_ACCOUNT, address }
  },

}

export default AccountActions
