import { createStore, combineReducers } from "redux";
import reducerTodo from "./reducers/reducerTodo";

let reducers = combineReducers({
    todolist: reducerTodo,
});

let store = createStore(reducers);

export default store;