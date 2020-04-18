import React from 'react';
import Todo from './todo';
import { doneTaskAC, deleteTaskAC } from '../../BLL/state';

const TodoContainer = (props) => {
    let tasks = props.store._state.todolist.tasks;

    let deleteTask = (taskID) => {
        props.store._dispatch(deleteTaskAC(taskID)); 
    }

    return (
       <Todo tasks={tasks} deleteTask={deleteTask}/>
    );
}

export default TodoContainer;