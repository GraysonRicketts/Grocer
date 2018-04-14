import { 
  TOGGLE_ITEM,
  RECEIVE_ITEMS,
  REQUEST_ITEMS,
  UPDATE_ITEM,
  ADD_ITEM,
  DELETE_ITEM
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
      const newItem = {
        _id: action.newItem._id,
        id: state.items.length,
        name: action.newItem.itemDef.name,
        category: action.newItem.itemDef.category,
        number: action.newItem.number,
        size: action.newItem.size,
        checkedOff: action.newItem.checkedOff
      }

      state.items.push(newItem)
      return { ...state }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.id
        })
      }
    default:
      return state
  }
}
