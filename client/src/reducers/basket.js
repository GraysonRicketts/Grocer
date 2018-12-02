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
          if (item && item.id === action.id) {
            return {...item, checkedOff: !item.checkedOff}
          }

          return item
        })
      }
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item && item.id === action.id) {
            const update = action.update

            if (update.name === '' || update.name) {
              update.itemDef = {
                category: item.itemDef.category,
                name: update.name
              }
            }
            else if(update.category) {
              update.itemDef = {
                name: item.itemDef.name,
                category: update.category
              }
            }

            return {...item, ...update}
          }

          return item
        })
      }
    case ADD_ITEM:
      const newItem = {
        ...action.newItem,
        id: state.items.length
      }
      state.items.push(newItem)
      return { ...state }
    case DELETE_ITEM:
      state.items[action.id] = undefined
      return { ...state }
    default:
      return state
  }
}
