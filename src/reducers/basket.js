import { 
  TOGGLE_ITEM,
  RECEIVE_ITEMS,
  REQUEST_ITEMS
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
        items: state.items.map((item, id) => {
          if (id === action.id) {
            return {...item, checkedOff: !item.checkedOff}
          }

          return item
        })
      }
    default:
      return state
  }
}
