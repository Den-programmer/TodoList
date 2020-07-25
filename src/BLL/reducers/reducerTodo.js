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
            title: 'Повторить неповни речення!',
            done: false,
            isEdit: false
        },
        {
            id: 2,
            title: 'Выучить второй стих!',
            done: false,
            isEdit: false
        },
        {
            id: 3,
            title: 'Выучить стих!',
            done: false,
            isEdit: false
        },
    ],
    cashTasks: [],
    errorEditText: 'Untitled'
}

let reducerTodo = (state = todolist, action) => {
    let stateCopy = { ...state }
    stateCopy.tasks = [...state.tasks]

    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: stateCopy.tasks.length + 1,
                title: action.taskTitle,
                done: false,
                isEdit: false
            }
            stateCopy.tasks.push(newTask)
            return stateCopy
        case DONE_TASK:
            stateCopy.tasks.forEach(task => {
                if (task.id === action.taskId) {
                    if (task.done === false) {
                        task.done = true
                    } else {
                        task.done = false
                    }
                }
            })

            return stateCopy
        case DELETE_TASK:
            stateCopy.tasks = stateCopy.tasks.filter(t => {
                if (t.id !== action.taskID) return true
            });
            return stateCopy
        case DELETE_ALL_TASKS:
            if (stateCopy.tasks.length > 0) {
                stateCopy.cashTasks = stateCopy.tasks
            }
            stateCopy.tasks = []

            return stateCopy
        case RETURN_DELETED_TASKS:
            stateCopy.tasks = stateCopy.cashTasks

            return stateCopy
        case EDIT_TASKS:
            stateCopy.tasks.forEach(task => {
                if (task.id === action.taskId) task.isEdit = true
            })

            return stateCopy;
        case FINISH_EDITING_TASKS:
            stateCopy.tasks.forEach(task => {
                if (task.id === action.taskId && task.title === '') {
                    task.title = stateCopy.errorEditText
                }
                task.isEdit = false
            })

            return stateCopy
        case ON_EDIT_INPUT_CHANGE:
            stateCopy.cashTasks = stateCopy.tasks
            stateCopy.tasks.forEach(task => {
                if (task.id === action.taskId) task.title = action.taskValue
            });
            return stateCopy
        default:
            return state
    }
}

/* Action Creators! */

export const addTask = (taskTitle) => {
    return { type: ADD_TASK, taskTitle: taskTitle }
}
export const doneTask = (taskId) => {
    return { type: DONE_TASK, taskId: taskId }
}
export const deleteTask = (taskID) => {
    return { type: DELETE_TASK, taskID: taskID }
}
export const deleteAllTasks = () => {
    return { type: DELETE_ALL_TASKS }
}
export const returnDeletedTasks = () => {
    return { type: RETURN_DELETED_TASKS }
}
export const editTasks = (taskId) => {
    return { type: EDIT_TASKS, taskId }
}
export const finishEditTasks = (taskId, taskValue) => {
    return { type: FINISH_EDITING_TASKS, taskId, taskValue }
}
export const onEditInputChange = (taskValue, taskId) => {
    return { type: ON_EDIT_INPUT_CHANGE, taskValue, taskId }
}

export default reducerTodo