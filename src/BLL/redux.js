import { createStore, combineReducers } from "redux";
import reducerTodo from "./reducers/reducerTodo";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    todolist: reducerTodo,
    form: formReducer
});

let store = createStore(reducers);

export default store;