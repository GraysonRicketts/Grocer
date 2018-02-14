const items = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          category: action.category,
          name: action.name,
          number: action.number,
          size: action.size,
          note: action.note,
          checkedOff: false,
        }
      ];
    case 'TOGGLE_ITEM':
      return [
        state.map(item => 
          (item.id === action.id)
            ? {...todo, checkedOff: !item.checkedOff}
            : item
          )
      ];
    default:
      return state;
  }
}

export default items;
