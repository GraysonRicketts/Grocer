import fetch from 'cross-fetch'
import { authenticateUser, deauthenticateUser } from './../utils/auth'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'

/*
Login
*/

function receiveLogin(email, success, token, baskets) {
  return {
    type: RECEIVE_LOGIN,
    success,
    email,
    token,
    baskets
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

    const url = '/auth/login'
    const payload = { email, password }

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => response.json())
      .then(json => {
        const { success, token, baskets } = json

        if (!success) {
          throw new Error('failed to login')
        }

        authenticateUser(token)
        dispatch(receiveLogin(email, success, token, baskets))
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

/*
Signup
*/

function receiveSignup(email, success, token, baskets) {
  return {
    type: RECEIVE_SIGNUP,
    success,
    email,
    token,
    baskets
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

    const url = '/auth/signup'
    const payload = { email, password }

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => response.json())
      .then(json => {
        const { success, token, baskets } = json

        if (!success) {
          throw new Error('failed to signup')
        }

        dispatch(receiveSignup(email, success, token, baskets))
      })
      .catch((err) => {
        console.error(err)
      })
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
    deauthenticateUser()

    const url = '/auth/logout'
    return fetch(url)
      .catch((err) => {
        console.error(err)
      })
  }
}
