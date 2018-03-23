import fetch from 'cross-fetch'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'

/*
Login
*/

function receiveLogin(email, success) {
  return {
    type: RECEIVE_LOGIN,
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

    const url = '/login'
    const payload = { email, password }

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => dispatch(receiveLogin(email, response.status === 200 ? true : false)))
      .catch((err) => {
        console.error(err)
      })
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
    type: REQUEST_SIGNUP
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

/*
Logout
*/

function requestLogout() {
  return {
    type: REQUEST_LOGOUT
  }
}

export function logout() {
  return dispatch => {
    dispatch(requestLogout())

    const url = '/logout'
    return fetch(url)
      .catch((err) => {
        console.error(err)
      })
  }
}
