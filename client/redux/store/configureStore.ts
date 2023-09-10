import { createStore, combineReducers } from 'redux';
import menuReducer from '../reducers/menuReducer';

const rootReducer = combineReducers({
    toggleMenu: menuReducer,
});

const store = createStore(rootReducer);

export default store;