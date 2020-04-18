let ADD_TASK = 'ADD-TASK';
let DONE_TASK = 'DONE-TASK';
let DELETE_TASK = 'DELETE-TASK';

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
    ]
}

let reducerTodo = (state = todolist, action) => {
    let stateCopy = { ...state }
    stateCopy.tasks = [...state.tasks];

    if (action.type === ADD_TASK) {
        let newTask = {
            id: 4,
            title: 'title',
            done: false,
        }
        stateCopy.todolist.tasks.push(newTask);

        return stateCopy;
    } else if (action.type === DONE_TASK) {
        


        return stateCopy;
    } else if (action.type === DELETE_TASK) {
        stateCopy.tasks = stateCopy.tasks.filter(t => {
            if (t.id !== action.taskID) {
                return true;
            }
        });


        console.log(stateCopy);
        return stateCopy;
    }
    return state;
}

export let addTaskAC = () => {
    return { type: ADD_TASK, }
}
export let doneTaskAC = () => {
    return { type: DONE_TASK, }
}
export let deleteTaskAC = (taskID) => {
    return { type: DELETE_TASK, taskID: taskID }
}

export default reducerTodo;