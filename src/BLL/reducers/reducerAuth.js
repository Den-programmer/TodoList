import { AuthAPI } from "../../DAL/api"
import { stopSubmit } from 'redux-form'

const AUTH = 'AUTH'

const auth = {
    userId: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false
}

const reducerAuth = (state = auth, action) => {
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

const authAC = (email, rememberMe, userId, isAuth) => ({ type: AUTH, email, rememberMe, userId, isAuth })

// Thunk Creators!

export const authentication = (rememberMe = false) => async (dispatch) => {
    const data = await AuthAPI.auth()
    if (data.resultCode === 0) dispatch(authAC(data.email, rememberMe, data.userId, true))
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await AuthAPI.login(email, password, rememberMe)
    if(data.resultCode === 0) {
        dispatch(authentication(rememberMe))
    } else {
        const message = data.messages[0]
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    const data = await AuthAPI.logout()
    if(data.resultCode === 0) dispatch(authAC(null, false, null, false))
}


export default reducerAuth