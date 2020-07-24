import { AuthAPI } from "../../DAL/api"
import { stopSubmit } from 'redux-form'

const AUTH = 'AUTH'

let auth = {
    userId: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false
}

let reducerAuth = (state = auth, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                email: action.email,
                login: action.email,
                rememberMe: action.rememberMe,
                isAuth: action.isAuth,
                userId: action.userId
            }
        default:
            return state
    }
}

// Action Creators!

const authAC = (email, rememberMe, userId, isAuth) => {
    return { type: AUTH, email, rememberMe, userId, isAuth }
}

// Thunk Creators!

export const authentication = (rememberMe = false) => async (dispatch) => {
    let data = await AuthAPI.auth()
    if (data.resultCode === 0) dispatch(authAC(data.email, rememberMe, data.userId, true))
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await AuthAPI.login(email, password, rememberMe)
    if(data.resultCode === 0) {
        dispatch(authentication(rememberMe))
    } else {
        const message = data.messages[0]
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    let data = await AuthAPI.logout()
    if(data.resultCode === 0) dispatch(authAC(null, false, null, false))
}


export default reducerAuth