// actions.js

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const resetState = () => ({
  type: 'RESET_STATE',
});
