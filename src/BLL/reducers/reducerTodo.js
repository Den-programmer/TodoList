import firebase from 'firebase'
import background1 from '../../images/backgrounds/background_1.png'
import background2 from '../../images/backgrounds/background_2.png'
import background3 from '../../images/backgrounds/background_3.png'
import background4 from '../../images/backgrounds/background_4.png'
import background5 from '../../images/backgrounds/background_5.png'
import background6 from '../../images/backgrounds/background_6.png'
import background7 from '../../images/backgrounds/background_7.png'
import background8 from '../../images/backgrounds/background_8.png'

const ADD_TASK = 'ADD-TASK'
const DONE_TASK = 'DONE-TASK'
const DELETE_TASK = 'DELETE-TASK'
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS'
const RETURN_DELETED_TASKS = 'RETURN_DELETED_TASKS'
const EDIT_TASKS = 'EDIT_TASKS'
const FINISH_EDITING_TASKS = 'FINISH_EDITING_TASKS'
const FINISH_EDITING = 'FINISH_EDITING'
const ON_EDIT_INPUT_CHANGE = 'ON_EDIT_INPUT_CHANGE'

const SET_TASKS = 'SET_TASKS'
const SET_BACKGROUNDS = 'SET_BACKGROUNDS'

const CHOOSE_ALL_TASKS = 'CHOOSE_ALL_TASKS'
const CHOOSE_ACTIVE_TASKS = 'CHOOSE_ACTIVE_TASKS'
const CHOOSE_DONE_TASKS = 'CHOOSE_DONE_TASKS'

const SET_IS_BACKGROUND_MODAL_ACTIVE_STATUS = 'SET_IS_BACKGROUND_MODAL_ACTIVE_STATUS'
const SET_BACKGROUND = 'SET_BACKGROUND'

const SET_FILTTER_TERM = 'SET_FILTTER_TERM'

const todolist = {
    tasks: [],
    isAllTasks: true,
    isActiveTasks: false,
    isDoneTasks: false,
    cashTasks: [],
    errorEditText: 'Untitled',
    isBackgroundModalActive: false,
    backgrounds: [
        {
            id: 1,
            chosen: true,
            src: background1,
            styleBackground: 'linear-gradient(to right, #7CB9E8, #4F8CBB)'
        },
        {
            id: 2,
            chosen: false,
            src: background2,
            styleBackground: 'linear-gradient(to right, #222222, #000)'
        },
        {
            id: 3,
            chosen: false,
            src: background3,
            styleBackground: 'linear-gradient(to right, #FFF, #C7C7C7)'
        },
        {
            id: 4,
            chosen: false,
            src: background4,
            styleBackground: 'linear-gradient(to right, #00FF00, #008080)'
        },
        {
            id: 5,
            chosen: false,
            src: background5,
            styleBackground: 'linear-gradient(to right, #4E2458, #DB65F9)'
        },
        {
            id: 6,
            chosen: false,
            src: background6,
            styleBackground: 'linear-gradient(to right, #DDFF6F, #66DDAA)'
        },
        {
            id: 7,
            chosen: false,
            src: background7,
            styleBackground: 'linear-gradient(to right, #FF6C64, #D96200)'
        },
        {
            id: 8,
            chosen: false,
            src: background8,
            styleBackground: 'linear-gradient(to right, #0048BA, #008080)'
        }
    ],
    filter: {
        term: ''
    }
}

const reducerTodo = (state = todolist, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: state.tasks.length + 1,
                title: action.taskTitle,
                done: false,
                isEdit: false
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }
        case DONE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.taskId) return { ...task, done: !task.done }
                    return task
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId && true)
            }
        case DELETE_ALL_TASKS:
            return {
                ...state,
                cashTasks: state.tasks.length > 0 && [...state.tasks],
                tasks: []
            }
        case RETURN_DELETED_TASKS:
            return {
                ...state,
                tasks: [...state.cashTasks]
            }
        case EDIT_TASKS:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.taskId) return { ...task, isEdit: true }
                    return task
                })
            }
        case FINISH_EDITING_TASKS:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.taskId && task.title === '') return { ...task, title: state.errorEditText, isEdit: false }
                    return task
                })
            }
        case ON_EDIT_INPUT_CHANGE:
            return {
                ...state,
                cashTasks: [...state.tasks],
                tasks: state.tasks.map(task => {
                    if (task.id === action.taskId) return { ...task, title: action.taskValue }
                    return task
                })
            }
        case CHOOSE_ALL_TASKS:
            return {
                ...state,
                isAllTasks: true,
                isActiveTasks: false,
                isDoneTasks: false
            }
        case CHOOSE_ACTIVE_TASKS:
            return {
                ...state,
                isAllTasks: false,
                isActiveTasks: true,
                isDoneTasks: false
            }
        case CHOOSE_DONE_TASKS:
            return {
                ...state,
                isAllTasks: false,
                isActiveTasks: false,
                isDoneTasks: true
            }
        case SET_IS_BACKGROUND_MODAL_ACTIVE_STATUS:
            return {
                ...state,
                isBackgroundModalActive: action.modalStatus
            }
        case SET_BACKGROUND:
            return {
                ...state,
                backgrounds: state.backgrounds.map(background => {
                    if (background.id === action.backgroundId) return { ...background, chosen: true }
                    return { ...background, chosen: false }
                })
            }
        case FINISH_EDITING:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    return { ...item, isEdit: false }
                })
            }
        case SET_FILTTER_TERM:
            return {
                ...state,
                filter: { ...state.filtter, term: action.term }
            }
        case SET_TASKS:
            return {
                ...state,
                tasks: [...action.tasks]
            }
        case SET_BACKGROUNDS:
            return {
                ...state,
                backgrounds: action.backgrounds
            }
        default:
            return state
    }
}

/* Action Creators! */

const addTask = (taskTitle) => ({ type: ADD_TASK, taskTitle })
const doneTask = (taskId) => ({ type: DONE_TASK, taskId })
const deleteTask = (taskId) => ({ type: DELETE_TASK, taskId })
export const deleteAllTasks = () => ({ type: DELETE_ALL_TASKS })
export const returnDeletedTasks = () => ({ type: RETURN_DELETED_TASKS })
export const editTasks = (taskId) => ({ type: EDIT_TASKS, taskId })
const finishEditTasks = (taskId, taskValue) => ({ type: FINISH_EDITING_TASKS, taskId, taskValue })
export const finishEditing = () => ({ type: FINISH_EDITING })
export const onEditInputChange = (taskValue, taskId) => ({ type: ON_EDIT_INPUT_CHANGE, taskValue, taskId })
export const chooseAllTasks = () => ({ type: CHOOSE_ALL_TASKS })
export const chooseActiveTasks = () => ({ type: CHOOSE_ACTIVE_TASKS })
export const chooseDoneTasks = () => ({ type: CHOOSE_DONE_TASKS })
export const setIsBackgroundModalActiveStatus = (modalStatus) => ({ type: SET_IS_BACKGROUND_MODAL_ACTIVE_STATUS, modalStatus })
const setBackground = (backgroundId) => ({ type: SET_BACKGROUND, backgroundId })
export const setFilterTerm = (term) => ({ type: SET_FILTTER_TERM, term })

const setTasks = (tasks) => ({ type: SET_TASKS, tasks })
export const setBackgrounds = (backgrounds) => ({ type: SET_BACKGROUNDS, backgrounds })

/* Thunk Creators! */

const accountsDoc = "X5K05lvrWOEQSyw8myaV"

export const requestTasks = () => async (dispatch, getState) => {
    const db = firebase.firestore()
    const data = await db.collection("accounts").get()
    const dataArray = data.docs.map((doc) => doc.data())
    const emailCheckout = getState().auth.user.email
    const accounts = dataArray[0].accountsData
    accounts.forEach(item => {
        if (item.email === emailCheckout) {
            dispatch(setTasks(item.tasks))
        }
    })
}

export const requestBackgrounds = () => async (dispatch, getState) => {
    const db = firebase.firestore()
    const data = await db.collection("accounts").get()
    const dataArray = data.docs.map((doc) => doc.data())
    const emailCheckout = getState().auth.user.email
    const accounts = dataArray[0].accountsData
    accounts.forEach(item => {
        if (item.email === emailCheckout) {
            debugger
            dispatch(setBackgrounds(item.backgrounds))
        }
    })
}

export const updateBackground = (backgroundId) => async (dispatch, getState) => {
    dispatch(setBackground(backgroundId))
    const backgrounds = getState().todolist.backgrounds
    const db = firebase.firestore()
    const data = await db.collection("accounts").get()
    const dataArray = data.docs.map((doc) => doc.data())
    const accounts = dataArray[0].accountsData
    const emailCheckout = getState().auth.user.email
    const accountsData = accounts.map((item) => {
        debugger
        if (item.email === emailCheckout) return { ...item, backgrounds }
        return item
    })
    db.collection("accounts").doc(accountsDoc).update({ accountsData })
}

const updateTasks = async (dispatch, getState, func, func2) => {
    const db = firebase.firestore()
    const emailCheckout = getState().auth.user.email
    const data = await db.collection("accounts").get()
    const dataArray = data.docs.map((doc) => doc.data())
    const accounts = dataArray[0].accountsData
    dispatch(func)
    func2 !== undefined && dispatch(func2)
    const tasks = getState().todolist.tasks
    const accountsData = accounts.map((item) => {
        if (item.email === emailCheckout) return { ...item, tasks }
        return item
    })
    db.collection("accounts").doc(accountsDoc).update({ accountsData })
}

export const updateAddedTask = (taskTitle) => (dispatch, getState) => {
    updateTasks(dispatch, getState, addTask(taskTitle))
}

export const updateDoneTask = (taskId) => (dispatch, getState) => {
    updateTasks(dispatch, getState, doneTask(taskId))
}

export const dlTask = (taskId) => (dispatch, getState) => {
    updateTasks(dispatch, getState, deleteTask(taskId))
}

export const updateEditedTask = (taskId, taskValue) => (dispatch, getState) => {
    updateTasks(dispatch, getState, finishEditTasks(taskId, taskValue), finishEditing())
}

export const updateDeletedAllTasks = () => (dispatch, getState) => {
    updateTasks(dispatch, getState, deleteAllTasks())
}

export const updateUndoDeletedTasks = () => (dispatch, getState) => {
    updateTasks(dispatch, getState, returnDeletedTasks())
}

export default reducerTodo