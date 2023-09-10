const initialState = false;

const menuReducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return !state;
        case 'CLOSE_MENU':
            return false;
        default:
            return state;
    }
};

export default menuReducer;
