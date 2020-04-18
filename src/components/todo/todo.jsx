import React from 'react';
import classes from './todo.module.css';
import Tasks from './tasks/tasks';
import HeaderTodo from './HeaderTodo/headerTodo';
import AddTask from './AddTask/addTask';

const Todo = (props) => {
    return (
        <div className={classes.todo}>
            <HeaderTodo />
            <Tasks store={props.store}/>
            <AddTask />
        </div>
    );
}

export default Todo;