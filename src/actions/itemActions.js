import json from './../data/data'

export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'

export function toggleItem(id) {
  return { type: TOGGLE_ITEM, id }
}

function receiveItems(basket, json) {
  return {
    type: RECEIVE_ITEMS,
    basket,
    items: json.items,
    receivedAt: Date.now()
  }
}

function requestItems(basket) {
  return {
    type: REQUEST_ITEMS,
    basket
  }
}

function fetchItems(basket) {
  return dispatch => {
    dispatch(requestItems(basket))
    
    // TODO: call to API
    return setTimeout(() => {
        dispatch(receiveItems(basket, json))
      }, 1000)
  }
}

function shouldFetchItems(state) {
  const items = state.items

  if (!items) {
    return true
  } else if (items.isFetching) {
    return false
  } else {
    return items.didInvalidate
  }
}

export function fetchItemsIfNeeded(basket) {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState())) {
      return dispatch(fetchItems(basket))
    }
  }
}
