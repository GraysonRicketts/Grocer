import { 
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
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
        isLoggedIn: action.success
      }
    default:
      return state
  }
}
