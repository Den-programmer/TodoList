import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerTodo from "./reducers/reducerTodo";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    todolist: reducerTodo,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;