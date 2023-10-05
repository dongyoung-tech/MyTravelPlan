// actions.js

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const resetState = () => ({
  type: 'RESET_STATE',
});

export const deleteItem = (itemName) => ({
  type: 'DELETE_ITEM',
  payload: itemName,
});