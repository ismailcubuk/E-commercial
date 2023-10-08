const modalInitialState = {
  isOpen: false,
};

export const modalReducer = (state = modalInitialState, action: { type: string; }) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        isOpen: true,
      };
    case 'CLOSE_MODAL':
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

const menuInitialState = false;

export const menuReducer = (state = menuInitialState, action: { type: string; }) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return !state;
    case 'CLOSE_MENU':
      return false;
    default:
      return state;
  }
};
