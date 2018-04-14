import { getBasketFromToken, getToken } from "../utils/auth";

export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const REQUEST_UPDATE = 'REQUEST_UPDATE'
export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

/*
Fetch
*/

function getItemsFromBasketResponse(json) {
  if (!json || !json.items) {
    return null
  }

  const items = json.items.map((item, index) => {
    const { _id, number, size, note, checkedOff } = item

    return {
      _id,
      id: index,
      name: item.itemDef.name,
      category: item.itemDef.category,
      number,
      size,
      note,
      checkedOff
    }
  })

  return items
}

function receiveBasket(basket, json) {
  const items = getItemsFromBasketResponse(json)
  return {
    type: RECEIVE_ITEMS,
    basket,
    items,
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

    const token = getToken()
    const basketId = getBasketFromToken(token)

    return fetchAPI('GET')
      .then(json => {
        const { success, basket } = json

        if (!success) {
          return
        }

        dispatch(receiveBasket(basketId, basket))
      })
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

export function updateItem(id, update) {
  return {
    type: UPDATE_ITEM,
    id,
    update
  }
}

export function saveItemIfNeeded(id, update) {
  return (dispatch, getState) => {
    const state = getState()
    const updatedItem = {
      ...update,
      _id: state.basket.items[id]._id
    }

    const payload = {
      delta: {
        modItems: [ updatedItem ]
      }
    }

    return fetchAPI('PUT', payload)
      .then(json => {
        const { success } = json

        if (!success) {
          throw new Error('failed to update basket')
        }

        dispatch(updateItem(update._id, update))
      })
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
    const payload = {
      delta: {
        newItem
      }
    }
    
    return fetchAPI('POST', payload)
      .then(json => {
        const { success, newItem } = json

        if (!success || !newItem) {
          throw new Error('failed to add to basket')
        }

        dispatch(addItem(newItem))
      })
  }
}

/*
Delete
*/

function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  }
}

export function deleteItemFromBasket(id) {
  return (dispatch, getState) => {
    const state = getState()
    const deletedItem = {
      _id: state.basket.items[id]._id
    }

    const payload = {
      delta: {
        deletedItems: [ deletedItem ]
      }
    }

    return fetchAPI('DELETE', payload)
      .then(json => {
        const { success } = json

        if (!success) {
          throw new Error('failed to delete basket')
        }

        dispatch(deleteItem(id))
      })
  }
}

/*
Toggle
*/

export function toggleItem(id) {
  return (dispatch, getState) => {
    dispatch(toggleCheckedOff(id))

    const state = getState()
    const modifiedItem = {
      _id: state.basket.items[id]._id,
      checkedOff: state.basket.items[id].checkedOff
    }

    const payload = {
      delta: {
        modItems: [ modifiedItem ]
      }
    }

    return fetchAPI('PUT', payload)
      .then(json => {
        const { success } = json

        if (!success) {
          throw new Error('failed to toggle item')
        }
      })
  }
  
}

function toggleCheckedOff(id) {
  return { type: TOGGLE_ITEM, id }
}

/*
Fetch 
*/

function fetchAPI(method, payload) {
  const token = getToken()
  const basket = getBasketFromToken(token)
  const url = '/api/basket/' + basket

  let request = {
    method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

  if (payload) {
    request = {
      ...request,
      body: JSON.stringify(payload),
      headers: {
        ...request.headers,
        'Content-Type': 'application/json'
      }
    }
  }

  return fetch(url, request)
    .then(response => {
      if (response.status >= 400) {
        throw new BadResponseError(response.status)
      }

      return response.json()
    })
    .catch((err) => {
      if (err.status === 401) {
        return false
      }
    })
}

class BadResponseError extends Error {
  constructor(status, ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadResponseError)
    }

    this.status = status
  }
}
