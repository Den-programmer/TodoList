import React from 'react';
import classes from './tasks.module.css';
import Task from './task/task';

const Tasks = (props) => {
    let tasks = props.tasks.map((task) => {
        return <Task key={task.id} id={task.id} title={task.title} done={task.done} deleteTask={props.deleteTask}/>
    });

    return (
        <div className={classes.tasks}>
            {tasks}
        </div>
    );
}

export default Tasks;