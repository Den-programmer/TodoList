let ADD_TASK = 'ADD-TASK';
let DONE_TASK = 'DONE-TASK';
let DELETE_TASK = 'DELETE-TASK';

let store = {
    _state: {
        todolist: {
            tasks:[
                {
                    id: 1,
                    title:'Попрограммировать',
                    done: true,
                },
                {
                    id: 2,
                    title:'Выполнить тренировку переднего виса!',
                    done: true,
                },
                {   
                    id: 3,
                    title:'Повтори бср!',
                    done: true,
                },
            ]
        }
    },
    _dispatch(action) {
        if (action.type === ADD_TASK) {

        } else if (action.type === DONE_TASK) {

        } else if (action.type === DELETE_TASK) {

        }
    }
}

let addTaskAC = () => {
    return { type: ADD_TASK, }
}
let doneTaskAC = () => {
    return { type: DONE_TASK, }
}
let deleteTaskAC = () => {
    return { type: DELETE_TASK, }
}

window.store = store;

export default store;