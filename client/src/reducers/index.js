import { combineReducers } from 'redux';
import basket from './basket'
import user from './user'

export default combineReducers({
  basket,
  user
})
