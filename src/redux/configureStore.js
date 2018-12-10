import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import ToDoApp from './modules/toDoApp';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore);

const reducer = combineReducers({
    ToDoApp
})

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;