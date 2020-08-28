const ADD_TASK = 'ADD-TASK'
const DONE_TASK = 'DONE-TASK'
const DELETE_TASK = 'DELETE-TASK'
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS'
const RETURN_DELETED_TASKS = 'RETURN_DELETED_TASKS'
const EDIT_TASKS = 'EDIT_TASKS'
const FINISH_EDITING_TASKS = 'FINISH_EDITING_TASKS'
const ON_EDIT_INPUT_CHANGE = 'ON_EDIT_INPUT_CHANGE'

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
    cashTasks: [],
    errorEditText: 'Untitled'
}

const reducerTodo = (state = todolist, action) => {
    const stateCopy = { ...state }
    stateCopy.tasks = [...state.tasks]

    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: stateCopy.tasks.length + 1,
                title: action.taskTitle,
                done: false,
                isEdit: false
            }
            return {
                ...state,
                tasks: [ ...state.tasks, newTask ] 
            }
        case DONE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.taskId) return { ...task, done: !task.done }
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
                cashTasks: stateCopy.tasks.length > 0 && [ ...state.tasks ],
                tasks: []
            }
        case RETURN_DELETED_TASKS:
            return {
                ...state,
                tasks: [ ...state.cashTasks ]
            }
        case EDIT_TASKS:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.taskId) return { ...task, isEdit: true } 
                    return task
                })
            }
        case FINISH_EDITING_TASKS:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.taskId && task.title === '') return { ...task, title: state.errorEditText, isEdit: false }
                })
            }
        case ON_EDIT_INPUT_CHANGE:
            return {
                ...state,
                cashTasks: [ ...state.tasks ],
                tasks: state.tasks.map(task => {
                    if(task.id === action.taskId) return { ...task, title: action.taskValue }
                    return task 
                })
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
export const onEditInputChange = (taskValue, taskId) => ({ type: ON_EDIT_INPUT_CHANGE, taskValue, taskId })


export default reducerTodo