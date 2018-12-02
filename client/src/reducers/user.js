import { 
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  REQUEST_SIGNUP,
  RECEIVE_SIGNUP,
  REQUEST_LOGOUT,
  TOGGLE_SHOW_CHECKED_OFF
} from '../actions/userActions'

export default function user(state = {
    isFetching: false, email: null,
    loginFailed: false,
    showCheckedOff: true
  }, action) {
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
    case TOGGLE_SHOW_CHECKED_OFF:
      return {
        ...state,
        showCheckedOff: !state.showCheckedOff
      }
    default:
      return state
  }
}
