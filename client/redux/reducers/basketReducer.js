const initialState = [];
export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BASKET":
      return [...state, action.payload];
    default:
      return state;
  }
};
