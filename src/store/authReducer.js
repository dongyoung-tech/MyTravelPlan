// reducers.js
const initialState = {
  items: [], // 객체를 저장하는 배열
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const isItemExist = state.items.some(item => item.name === action.payload.name);
      if (isItemExist){
        alert('이미 추가한 여행지 입니다.');
        return state;
      } // 이미 존재하면 현재 상태를 그대로 반환
      return {
        ...state,
        items: [...state.items, action.payload], // 객체 추가
      }
      case 'RESET_STATE':
        // 상태를 초기 상태로 리셋
        return initialState;
    // 다른 액션들 처리
    default:
      return state;
  }
};

export default rootReducer;
