import firebase from 'firebase'
import { stopSubmit } from 'redux-form'

const AUTH = 'AUTH'
const SET_IS_REGISTER_STATUS = 'SET_IS_REGISTER_STATUS'

const auth = {
    user: {
        userId: null,
        email: null,
    },
    isAuth: false,
    isRegister: false
}

const reducerAuth = (state = auth, action) => {
    switch (action.type) {
        case AUTH:
            return {
               ...state,
               user: {
                   userId: action.userId,
                   email: action.email
               },
               isAuth: action.isAuth
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

const accountsDoc = "X5K05lvrWOEQSyw8myaV"

// Action Creators!

export const authentication = (email, userId, isAuth) => ({ type: AUTH, email, userId, isAuth })

export const setIsRegisterStatus = (status) => ({ type: SET_IS_REGISTER_STATUS, status })
 
// Thunk Creators!

export const createAccount = (email, password) => async (dispatch, getState) => {
    const db = firebase.firestore()
    const data = await db.collection("accounts").get()
    const dataArray =  data.docs.map((doc) => doc.data())
    const accounts = dataArray[0].accountsData
    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        let userId = firebase.auth().currentUser.uid
        dispatch(authentication(email, userId, true))
        const user = getState().auth.user
        const backgrounds = getState().todolist.backgrounds
        const currentUser = { ...user, backgrounds, tasks: [
            {
                id: 1,
                title: 'Note new task!',
                done: false,
                isEdit: false
            },
            {
                id: 2,
                title: 'Explore more functions!',
                done: false,
                isEdit: false
            },
            {
                id: 3,
                title: 'Change the background\'s app!',
                done: false,
                isEdit: false
            }
        ] }
        const accountsData = [ ...accounts, currentUser ]
        db.collection("accounts").doc(accountsDoc).update({ accountsData })
    }).catch((error) => {
        let action = stopSubmit('login', { _error: error.message })
        dispatch(action)
    })
}

export const login = (email, password) => (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        let userId = firebase.auth().currentUser.uid
        dispatch(authentication(email, userId, true))
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