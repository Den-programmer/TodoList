import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import reducerTodo from "./reducers/reducerTodo"
import { reducer as formReducer } from 'redux-form'
import thunkMiddleWare from 'redux-thunk'
import reducerAuth from "./reducers/reducerAuth"
import reducerSidebar from "./reducers/reducerSidebar"

const reducers = combineReducers({
    todolist: reducerTodo,
    auth: reducerAuth,
    sidebar: reducerSidebar,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)))
export default store