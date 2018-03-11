import { 
  TOGGLE_ITEM,
  RECEIVE_ITEMS,
  REQUEST_ITEMS,
  UPDATE_ITEM,
  ADD_ITEM
} from '../actions/itemActions'

export default function basket (state = { isFetching: false, items: [] }, action) {
  switch(action.type) {
    case REQUEST_ITEMS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ITEMS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
        lastUpdate: action.receivedAt
      }
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {...item, checkedOff: !item.checkedOff}
          }

          return item
        })
      }
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            const update = action.update
            return {...item, ...update}
          }

          return item
        })
      }
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.newItem)
      }
    default:
      return state
  }
}
