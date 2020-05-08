const ADD_TASK = 'ADD-TASK';
const DONE_TASK = 'DONE-TASK';
const DELETE_TASK = 'DELETE-TASK';
const TASK_VALUE_CHANGE = 'TASK-VALUE-CHANGE';
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';
const RETURN_DELETED_TASKS = 'RETURN_DELETED_TASKS';
const EDIT_TASKS = 'EDIT_TASKS';
const FINISH_EDITING_TASKS = 'FINISH_EDITING_TASKS';
const ON_EDIT_INPUT_CHANGE = 'ON_EDIT_INPUT_CHANGE';
const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE';

let todolist = {
    tasks: [
        {
            id: 1,
            title: 'Повторить неповни речення!',
            done: false,
            isEdit: false,
        },
        {
            id: 2,
            title: 'Выучить второй стих!',
            done: false,
            isEdit: false,
        },
        {
            id: 3,
            title: 'Выучить стих!',
            done: false,
            isEdit: false,
        },
    ],
    cashTasks: [],
    newTaskValue: "",
    undo: {
        display: 'none',
    },
    searchValue: 'value',
    errorEditText: 'Untitled',
    searchTasksStyles: {
        display: 'block',
    }
}

let reducerTodo = (state = todolist, action) => {
    let stateCopy = { ...state }
    stateCopy.tasks = [...state.tasks];
    stateCopy.cashTasks = [...state.cashTasks];
    stateCopy.undo = { ...state.undo };
    stateCopy.searchTasksStyles = { ...state.searchTasksStyles }
    let tasks = stateCopy.tasks.map(task => {
        return { ...task }
    });

    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: stateCopy.tasks.length + 1,
                title: action.taskTitle,
                done: false,
                isEdit: false,
            }
            stateCopy.tasks.push(newTask);
            stateCopy.newTaskValue = '';
            stateCopy.undo.display = 'none';
            return stateCopy;
        case TASK_VALUE_CHANGE:
            stateCopy.newTaskValue = action.newTaskValue;
            return stateCopy;
        case DONE_TASK:
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
        case DELETE_TASK:
            stateCopy.tasks = stateCopy.tasks.filter(t => {
                if (t.id !== action.taskID) {
                    return true;
                }
            });
            return stateCopy;
        case DELETE_ALL_TASKS:
            if (stateCopy.tasks.length > 0) {
                stateCopy.cashTasks = stateCopy.tasks;
            }
            stateCopy.tasks = [];
            stateCopy.undo.display = 'block';

            return stateCopy;
        case RETURN_DELETED_TASKS:
            stateCopy.tasks = stateCopy.cashTasks;
            stateCopy.undo.display = 'none';

            return stateCopy;
        case EDIT_TASKS:
            stateCopy.tasks.forEach(task => {
                if (task.id == action.taskId) {
                    task.isEdit = true;
                }
            });

            return stateCopy;
        case FINISH_EDITING_TASKS:
            stateCopy.tasks.forEach(task => {
                if (task.id == action.taskId && task.title == '') {
                    task.title = stateCopy.errorEditText;
                }
                task.isEdit = false;
            });

            return stateCopy;
        case ON_EDIT_INPUT_CHANGE:
            stateCopy.cashTasks = stateCopy.tasks;
            stateCopy.tasks.forEach(task => {
                if (task.id == action.taskId) {
                    task.title = action.taskValue;
                }
            });

            return stateCopy;
        case ON_SEARCH_CHANGE:
            stateCopy.searchValue = action.value;
            stateCopy.tasks = stateCopy.tasks.forEach(task => {
                if (stateCopy.searchValue !== '') {
                    if (task.title.innerText.search(stateCopy.searchValue) == -1) {
                        stateCopy.searchTasksStyles.display = 'none';
                    } else {
                        stateCopy.searchTasksStyles.display = 'block';
                    }
                } else {
                    stateCopy.searchTasksStyles.display = 'block';
                }
            });

            return stateCopy;
        default:
            return state;
    }
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
export const editTasks = (taskId) => {
    return { type: EDIT_TASKS, taskId }
}
export const finishEditTasks = (taskId, taskValue) => {
    return { type: FINISH_EDITING_TASKS, taskId, taskValue }
}
export const onEditInputChange = (taskValue, taskId) => {
    return { type: ON_EDIT_INPUT_CHANGE, taskValue, taskId }
}
export const onSearchChange = (value) => {
    return { type: ON_SEARCH_CHANGE, value }
}

export default reducerTodo;