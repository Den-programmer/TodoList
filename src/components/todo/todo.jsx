import React from 'react';
import classes from './todo.module.css';
import Tasks from './tasks/tasks';

const Todo = (props) => {

    console.log(props.store);

    return (
        <div className={classes.todo}>
            <Tasks/>
        </div>
    );
}

export default Todo;