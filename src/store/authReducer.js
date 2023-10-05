// reducers.js
const initialState = {
  items: [], // 객체를 저장하는 배열
};

// reducers.js
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const isItemExist = state.items.some(item => item.name === action.payload.name);
      if (isItemExist) {
        alert('이미 추가한 여행지 입니다.');
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'DELETE_ITEM':
      const updatedItems = state.items.filter(item => item.name !== action.payload.name);
      return {
        ...state,
        items: updatedItems,
      };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;

