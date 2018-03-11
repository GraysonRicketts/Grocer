import json from './../data/data'

export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const REQUEST_UPDATE = 'REQUEST_UPDATE'
export const ADD_ITEM = 'ADD_ITEM'

/*
Fetch
*/

function receiveBasket(basket, json) {
  return {
    type: RECEIVE_ITEMS,
    basket,
    items: json.items,
    receivedAt: Date.now()
  }
}

function requestBasket(basket) {
  return {
    type: REQUEST_ITEMS,
    basket
  }
}

function fetchBasket(basket) {
  return dispatch => {
    dispatch(requestBasket(basket))
    
    // TODO: call to API
    return setTimeout(() => {
        dispatch(receiveBasket(basket, json))
      }, 1000)
  }
}

function shouldFetchBasket(state) {
    return true
}

export function fetchItemsIfNeeded(basket) {
  return (dispatch, getState) => {
    if (shouldFetchBasket(getState())) {
      return dispatch(fetchBasket(basket))
    }
  }
}

/*
Update
*/

function updateItem(id, update) {
  return {
    type: UPDATE_ITEM,
    id,
    update
  }
}

function shouldUpdateItem(state) {
  return true
}

export function updateItemIfNeeded(id, update) {
  return (dispatch, getState) => {
    if (shouldUpdateItem(getState())) {
      return dispatch(updateItem(id, update))
    }
  }
}

/*
Add
*/

function addItem(newItem) {
  return {
    type: ADD_ITEM,
    newItem
  }
}

export function addItemToBasket(newItem) {
  return (dispatch) => {
    return dispatch(addItem(newItem))
  }
}

/*
Toggle
*/

export function toggleItem(id) {
  return { type: TOGGLE_ITEM, id }
}
