let ADD_TASK = 'ADD-TASK';
let DONE_TASK = 'DONE-TASK';
let DELETE_TASK = 'DELETE-TASK';
let TASK_VALUE_CHANGE = 'TASK-VALUE-CHANGE';

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
    newTaskValue : ""
}

let reducerTodo = (state = todolist, action) => {
    let stateCopy = { ...state }
    stateCopy.tasks = [...state.tasks];

    if (action.type === ADD_TASK) {
        let newTask = {
            id: stateCopy.tasks.length + 1,
            title: action.taskTitle,
            done: false,
        }
        stateCopy.tasks.push(newTask);

        return stateCopy;
    } else if (action.type === TASK_VALUE_CHANGE) {
        stateCopy.newTaskValue = action.newTaskValue;

        return stateCopy;
    } else if (action.type === DONE_TASK) {
        


        return stateCopy;
    } else if (action.type === DELETE_TASK) {
        stateCopy.tasks = stateCopy.tasks.filter(t => {
            if (t.id !== action.taskID) {
                return true;
            }
        });
        return stateCopy;
    }
    return state;
}

export let addTaskAC = (taskTitle) => {
    return { type: ADD_TASK, taskTitle:taskTitle}
}
export let doneTaskAC = () => {
    return { type: DONE_TASK, }
}
export let deleteTaskAC = (taskID) => {
    return { type: DELETE_TASK, taskID: taskID }
}
export let onTaskInputChangeAC = (newTaskValue) => {
    return { type: TASK_VALUE_CHANGE, newTaskValue }
}

export default reducerTodo;