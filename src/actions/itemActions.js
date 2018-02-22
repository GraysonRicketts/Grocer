import json from './../data/data'

export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'

export function toggleItem(id) {
  return { type: TOGGLE_ITEM, id }
}

function receiveBasket(basket, json) {
  debugger
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
  const basket = state.basket

  // debugger
  // if (!basket) {
    return true
  // } else if (basket.isFetching) {
  //   return false
  // } else {
  //   return basket.didInvalidate
  // }
}

export function fetchItemsIfNeeded(basket) {
  return (dispatch, getState) => {
    if (shouldFetchBasket(getState())) {
      return dispatch(fetchBasket(basket))
    }
  }
}
