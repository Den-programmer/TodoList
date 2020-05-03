const ADD_TASK = 'ADD-TASK';
const DONE_TASK = 'DONE-TASK';
const DELETE_TASK = 'DELETE-TASK';
const TASK_VALUE_CHANGE = 'TASK-VALUE-CHANGE';
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';
const RETURN_DELETED_TASKS = 'RETURN_DELETED_TASKS';

let todolist = {
    tasks: [
        {
            id: 1,
            title: 'Повторить неповни речення!',
            done: false,
        },
        {
            id: 2,
            title: 'Выучить второй стих!',
            done: false,
        },
        {
            id: 3,
            title: 'Выучить стих!',
            done: false,
        },
    ],
    cashTasks: [],
    newTaskValue: "",
    undo: {
        display: 'none',
    }
}

let reducerTodo = (state = todolist, action) => {
    let stateCopy = { ...state }
    stateCopy.tasks = [...state.tasks];
    stateCopy.cashTasks = [...state.cashTasks];
    stateCopy.undo = {...state.undo};
    let tasks = stateCopy.tasks.map(task => {
        return { ...task }
    });

    if (action.type === ADD_TASK) {
        let newTask = {
            id: stateCopy.tasks.length + 1,
            title: action.taskTitle,
            done: false,
        }
        stateCopy.tasks.push(newTask);
        stateCopy.newTaskValue = '';
        return stateCopy;
    } else if (action.type === TASK_VALUE_CHANGE) {
        stateCopy.newTaskValue = action.newTaskValue;
        return stateCopy;
    } else if (action.type === DONE_TASK) {
        tasks.forEach(task => {
            if (task.id == action.taskId) {
                if (task.done == false) {
                    task.done = true;
                } else {
                    task.done = false;
                }
            } 
        });
        stateCopy.tasks = tasks;

        return stateCopy;
    } else if (action.type === DELETE_TASK) {
        stateCopy.tasks = stateCopy.tasks.filter(t => {
            if (t.id !== action.taskID) {
                return true;
            }
        });
        return stateCopy;
    } else if (action.type === DELETE_ALL_TASKS) {
        if (stateCopy.tasks.length > 0) {
            stateCopy.cashTasks = stateCopy.tasks;
        }
        stateCopy.tasks = [];
        stateCopy.undo.display = 'block';
        
        return stateCopy;
    } else if (action.type === RETURN_DELETED_TASKS) {
        stateCopy.tasks = stateCopy.cashTasks;
        stateCopy.undo.display = 'none';

        return stateCopy;
    }
    return state;
}

export let addTask = (taskTitle) => {
    return { type: ADD_TASK, taskTitle: taskTitle }
}
export let doneTask = (taskId) => {
    return { type: DONE_TASK, taskId: taskId, }
}
export let deleteTask = (taskID) => {
    return { type: DELETE_TASK, taskID: taskID }
}
export let onTaskInputChange = (newTaskValue) => {
    return { type: TASK_VALUE_CHANGE, newTaskValue }
}
export const deleteAllTasks = () => {
    return { type: DELETE_ALL_TASKS }
}
export const returnDeletedTasks = () => {
    return { type: RETURN_DELETED_TASKS }
}

export default reducerTodo;