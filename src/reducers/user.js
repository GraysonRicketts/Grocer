import { 
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  REQUEST_SIGNUP,
  RECEIVE_SIGNUP
} from '../actions/userActions'

export default function user(state = { isFetching: false, email: null, isLoggedIn: false}, action) {
  switch(action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_LOGIN:
      return {
        ...state,
        isFetching: false,
        email: action.email,
        basket: action.basket,
        isLoggedIn: action.success
      }
    case REQUEST_SIGNUP:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_SIGNUP:
      return {
        ...state,
        email: action.email,
        isLoggedIn: action.success,
        isFetching: false
      }
    default:
      return state
  }
}
