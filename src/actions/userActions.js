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
    type: REQUEST_LOGIN
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

/*
Signup
*/

function receiveSignup(email, success) {
  return {
    type: RECEIVE_SIGNUP,
    email,
    success
  }
}

function requestSignup(email, password) {
  return {
    type: REQUEST_SIGNUP,
    email,
    password
  }
}

export function signup(email, password) {
  return dispatch => {
    dispatch(requestSignup(email, password))

    return setTimeout(() => {
      dispatch(receiveSignup(email, true))
      dispatch(receiveLogin(email, true))
    }, 1000)
  }
}
