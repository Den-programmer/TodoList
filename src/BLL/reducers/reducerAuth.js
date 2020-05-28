import { AuthAPI } from "../../DAL/api";

const AUTH = 'AUTH';

let auth = {
    userId: null,
    email: null,
    login: null,
    rememberMe: null,
    isAuth: false
}

let reducerAuth = (state = auth, action) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case AUTH:

            return stateCopy;
        default:
            return state;
    }
}

// Action Creators!

export const authAC = (email, rememberMe = false, userId, isAuth) => {
    return { type: AUTH, email, rememberMe, userId, isAuth }
}

// Thunk Creators!

export const authentication = () => {
    return (dispatch) => {
        AuthAPI.auth().then(data => {
            if(data.resultCode === 0) {
                dispatch(authAC(data.email, null, data.userId, true));
            }
        });
    }
}

export default reducerAuth;