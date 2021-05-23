import firebase from 'firebase'
import { stopSubmit } from 'redux-form'

const AUTH = 'AUTH'
const SET_IS_REGISTER_STATUS = 'SET_IS_REGISTER_STATUS'

const auth = {
    userId: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false,
    isRegister: false
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
        case SET_IS_REGISTER_STATUS:
            return {
                ...state,
                isRegister: action.status
            }  
        default:
            return state
    }
}

// Action Creators!

export const authentication = (email, rememberMe, userId, isAuth) => ({ type: AUTH, email, rememberMe, userId, isAuth })

export const setIsRegisterStatus = (status) => ({ type: SET_IS_REGISTER_STATUS, status })
 
// Thunk Creators!

export const createAccount = (email, password) => (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        let userId = firebase.auth().currentUser.uid
        dispatch(authentication(email, false, userId, true))
    }).catch((error) => {
        let action = stopSubmit('login', { _error: error.message })
        dispatch(action)
    })
}

export const login = (email, password) => (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        let userId = firebase.auth().currentUser.uid
        dispatch(authentication(email, false, userId, true))
    }).catch(error => {
        let action = stopSubmit('login', { _error: error.message })
        dispatch(action)
    })
}

export const logout = () => (dispatch) => {
    firebase.auth().signOut().then(() => {
        dispatch(authentication(null, false, null, false))
    })
}

export default reducerAuth