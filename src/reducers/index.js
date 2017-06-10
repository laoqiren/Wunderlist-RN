import {combineReducers} from 'redux';
import nav from './navigation';
import todos from './todos';

export default combineReducers({
    nav,
    todos
});