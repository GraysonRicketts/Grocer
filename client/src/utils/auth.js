import jwt from 'jsonwebtoken'

/**
 * Authenticate a user. Save a token string in Local Storage
 *
 * @param {string} token
 */
export function authenticateUser(token) {
  localStorage.setItem('token', token)
}

/**
 * Check if a user is authenticated - check if a token is saved in Local Storage
 *
 * @returns {boolean}
 */
export function isUserAuthenticated() {
  if (localStorage.getItem('token') === null) {
    return false
  }

  const token = getToken()
  const decodedToken = jwt.decode(token)
  const timeNow = new Date().getTime() / 1000
  if (decodedToken.exp < timeNow) {
    deauthenticateUser()
    return false
  }

  return true
}

/**
 * Deauthenticate a user. Remove a token from Local Storage.
 *
 */
export function deauthenticateUser() {
  localStorage.removeItem('token')
}

/**
 * Get a token value.
 *
 * @returns {string}
 */
export function getToken() {
  return localStorage.getItem('token')
}

/**
 * Get a basket from token.
 *
 * @returns {string}
 */
export function getBasketFromToken(token) {
  token = jwt.decode(token)

  if (!token || !token.data) {
    return null
  }

  const basket = token.data
  return basket
}
