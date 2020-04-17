import React from 'react';
import classes from './tasks.module.css';
import Task from './task/task';

const Tasks = (props) => {
    return (
        <div className={classes.tasks}>
            <Task />
        </div>
    );
}

export default Tasks;