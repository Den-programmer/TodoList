let store = {
    _state: {
        todolist: {
            tasks:[
                {
                    id: 1,
                    title:'Повторить неповни речення!',
                    done: false,
                },
                {
                    id: 2,
                    title:'Выучить второй стих!',
                    done: false,
                },
                {   
                    id: 3,
                    title:'Выучить стих!',
                    done: false,
                },
            ]
        }
    },
    _dispatch(action) {
        let stateCopy = {...this._state}
        stateCopy.todolist = {...this._state.todolist}
        stateCopy.todolist.tasks = [...this._state.todolist.tasks];

        if (action.type === ADD_TASK) {
            let newTask = {
                id: 4,
                title:'title',
                done: false,
            }
            stateCopy.todolist.tasks.push(newTask);

            return stateCopy;
        } else if (action.type === DONE_TASK) {
            // stateCopy.todolist.tasks


            return stateCopy;
        } else if (action.type === DELETE_TASK) {
            stateCopy.todolist.tasks = stateCopy.todolist.tasks.filter(t => {
                if (t.id !== action.taskID) {
                    return true;
                }
            });
            

            console.log(stateCopy);
            return stateCopy;
        }
    }
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

export default store;