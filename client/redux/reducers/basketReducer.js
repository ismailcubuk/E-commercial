const initialState = {
  total: 0,
  basket: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TOTAL':
      return { ...state, total: action.total };
    case 'SET_BASKET':
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};
