import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import alerts from './reducers/alerts'
import accounts from './reducers/accounts'
import network from './reducers/network'
import fetching from './reducers/fetching'
import jurisdiction from './reducers/jurisdiction'
import validators from './reducers/validators'
import validations from './reducers/validations'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const mainReducer = combineReducers({
  alerts,
  accounts,
  network,
  fetching,
  jurisdiction,
  validators,
  validations,
});

const Store = createStore(
  mainReducer,
  applyMiddleware(thunkMiddleware),
  applyMiddleware(logger)
);

export default Store;
