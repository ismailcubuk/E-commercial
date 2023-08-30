import { createStore } from 'redux';

const initialState = {
    isMenuOpen: false,
};

const rootReducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen,
            };
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
