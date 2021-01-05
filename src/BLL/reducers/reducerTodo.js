import background_gradient1 from '../../images/backgrounds/background_1.png'
import background_gradient2 from '../../images/backgrounds/background_2.png'
import background_gradient3 from '../../images/backgrounds/background_3.png'
import background_gradient4 from '../../images/backgrounds/background_4.png'
import background_gradient5 from '../../images/backgrounds/background_5.png'
import background_gradient6 from '../../images/backgrounds/background_6.png'
import background_gradient7 from '../../images/backgrounds/background_7.png'
import background_gradient8 from '../../images/backgrounds/background_8.png'

const ADD_TASK = 'ADD-TASK'
const DONE_TASK = 'DONE-TASK'
const DELETE_TASK = 'DELETE-TASK'
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS'
const RETURN_DELETED_TASKS = 'RETURN_DELETED_TASKS'
const EDIT_TASKS = 'EDIT_TASKS'
const FINISH_EDITING_TASKS = 'FINISH_EDITING_TASKS'
const FINISH_EDITING = 'FINISH_EDITING'
const ON_EDIT_INPUT_CHANGE = 'ON_EDIT_INPUT_CHANGE'

const CHOOSE_ALL_TASKS = 'CHOOSE_ALL_TASKS'
const CHOOSE_ACTIVE_TASKS = 'CHOOSE_ACTIVE_TASKS'
const CHOOSE_DONE_TASKS = 'CHOOSE_DONE_TASKS'

const FILTER_ACTIVE_TASKS = 'FILTER_ACTIVE_TASKS'
const FILTER_DONE_TASKS = 'FILTER_DONE_TASKS'

const SET_IS_BACKGROUND_MODAL_ACTIVE_STATUS = 'SET_IS_BACKGROUND_MODAL_ACTIVE_STATUS'
const SET_BACKGROUND = 'SET_BACKGROUND'

const SET_FILTTER_TERM = 'SET_FILTTER_TERM'

const todolist = {
    tasks: [
        {
            id: 1,
            title: 'Register in todolist!',
            done: false,
            isEdit: false
        },
        {
            id: 2,
            title: 'Explore the menu functions!',
            done: false,
            isEdit: false
        },
        {
            id: 3,
            title: 'Start using app!',
            done: false,
            isEdit: false
        },
    ],
    activeTasks: [],
    doneTasks: [],
    isAllTasks: true,
    isActiveTasks: false,
    isDoneTasks: false,
    cashTasks: [],
    errorEditText: 'Untitled',
    isBackgroundModalActive: false,
    backgrounds: [
        {
            id: 1,
            src: background_gradient1,
            chosen: true,
            styleBackground: 'linear-gradient(to right, #7CB9E8, #4F8CBB)'
        },
        {
            id: 2,
            src: background_gradient2,
            chosen: false,
            styleBackground: 'linear-gradient(to right, #222222, #000)'
        },
        {
            id: 3,
            src: background_gradient3,
            chosen: false,
            styleBackground: 'linear-gradient(to right, #FFF, #C7C7C7)'
        },
        {
            id: 4,
            src: background_gradient4,
            chosen: false,
            styleBackground: 'linear-gradient(to right, #00FF00, #008080)'
        },
        {
            id: 5,
            src: background_gradient5,
            chosen: false,
            styleBackground: 'linear-gradient(to right, #4E2458, #DB65F9)'
        },
        {
            id: 6,
            src: background_gradient6,
            chosen: false,
            styleBackground: 'linear-gradient(to right, #DDFF6F, #66DDAA)'
        },
        {
            id: 7,
            src: background_gradient7,
            chosen: false,
            styleBackground: 'linear-gradient(to right, #FF6C64, #D96200)'
        },
        {
            id: 8,
            src: background_gradient8,
            chosen: false,
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
                tasks: [...state.tasks, newTask],
                activeTasks: [...state.tasks, newTask]
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
        case FILTER_ACTIVE_TASKS:
            return {
                ...state,
                activeTasks: state.tasks.filter(task => !task.done && true)
            }
        case FILTER_DONE_TASKS:
            return {
                ...state,
                doneTasks: state.tasks.filter(task => task.done && true)
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
                    if(background.id === action.backgroundId) return { ...background, chosen: true }
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
        default:
            return state
    }
}

/* Action Creators! */

export const addTask = (taskTitle) => ({ type: ADD_TASK, taskTitle })
export const doneTask = (taskId) => ({ type: DONE_TASK, taskId })
export const deleteTask = (taskId) => ({ type: DELETE_TASK, taskId })
export const deleteAllTasks = () => ({ type: DELETE_ALL_TASKS })
export const returnDeletedTasks = () => ({ type: RETURN_DELETED_TASKS })
export const editTasks = (taskId) => ({ type: EDIT_TASKS, taskId })
export const finishEditTasks = (taskId, taskValue) => ({ type: FINISH_EDITING_TASKS, taskId, taskValue })
export const finishEditing = () => ({ type: FINISH_EDITING })
export const onEditInputChange = (taskValue, taskId) => ({ type: ON_EDIT_INPUT_CHANGE, taskValue, taskId })
export const chooseAllTasks = () => ({ type: CHOOSE_ALL_TASKS })
export const chooseActiveTasks = () => ({ type: CHOOSE_ACTIVE_TASKS })
export const chooseDoneTasks = () => ({ type: CHOOSE_DONE_TASKS })
export const filterActiveTasks = () => ({ type: FILTER_ACTIVE_TASKS })
export const filterDoneTasks = () => ({ type: FILTER_DONE_TASKS })
export const setIsBackgroundModalActiveStatus = (modalStatus) => ({ type: SET_IS_BACKGROUND_MODAL_ACTIVE_STATUS, modalStatus })
export const setBackground = (backgroundId) => ({ type: SET_BACKGROUND, backgroundId })
export const setFilterTerm = (term) => ({ type: SET_FILTTER_TERM, term })

export default reducerTodo