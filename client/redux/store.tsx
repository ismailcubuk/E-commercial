import { createStore, combineReducers } from 'redux';
import menuReducer from './Features/ToggleMenu/menuReducer'; // Update the path

const rootReducer = combineReducers({
    toggleMenu: menuReducer,
});

const store = createStore(rootReducer);

export default store;
