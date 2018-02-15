let nextItemId = 0;

export const addItem = (
  category,
  name,
  number,
  size,
  note
) => {
  return { 
    type: 'ADD_ITEM',
    id: nextItemId++,
    category,
    name,
    number,
    size,
    note
  }
};

export const toggleItem = id => {
  return {
    type: 'TOGGLE_ITEM',
    id
  };
};
