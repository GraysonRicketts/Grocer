import { 
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  REQUEST_SIGNUP,
  RECEIVE_SIGNUP,
  REQUEST_LOGOUT
} from '../actions/userActions'

export default function user(state = { isFetching: false, email: null, loginFailed: false}, action) {
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
        baskets: action.baskets,
        loginFailed: !action.success
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
        loginFailed: !action.success,
        isFetching: false
      }
    case REQUEST_LOGOUT:
      return {
        ...state,
        email: null,
        isLoggedIn: false
      }
    default:
      return state
  }
}
