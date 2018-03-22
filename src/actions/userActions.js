export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP'

/*
Login
*/

function receiveLogin(email, success, basket) {
  return {
    type: RECEIVE_LOGIN,
    basket,
    email,
    success
  }
}

function requestLogin(email, password) {
  return {
    type: REQUEST_LOGIN,
    email,
    password
  }
}

export function login(email, password) {
  return dispatch => {
    dispatch(requestLogin(email, password))
    
    // TODO: call to API
    return setTimeout(() => {
        dispatch(receiveLogin(email, true, null))
      }, 1000)
  }
}
