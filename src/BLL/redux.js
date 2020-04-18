import { createStore, combineReducers } from "redux";
import reducerTodo from "./reducers/reducerTodo";

let reducers = combineReducers({
    todolist: reducerTodo,
});

window.store = store;

let store = createStore(reducers);


export default store;