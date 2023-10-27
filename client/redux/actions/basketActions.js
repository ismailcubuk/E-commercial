export const updateTotal = (total) => ({
  type: 'UPDATE_TOTAL',
  total,
});

export const setBasket = (basket) => ({
  type: 'SET_BASKET',
  payload: basket,
});
