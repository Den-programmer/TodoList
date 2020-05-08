import React from 'react';
import classes from './tasks.module.css';
import Task from './task/task';

const Tasks = (props) => {
    let tasks = props.tasks.map((task) => {
        return <Task searchTasksStyles={props.searchTasksStyles} onEditInputChange={props.onEditInputChange} 
                     isEdit={task.isEdit}
                     errorEditText={props.errorEditText} 
                     editTasks={props.editTasks} 
                     finishEditTasks={props.finishEditTasks} 
                     key={task.id} id={task.id} 
                     title={task.title} 
                     done={task.done} doneTask={props.doneTask} 
                     deleteTask={props.deleteTask}/>
    });
    return (
        <div className={classes.tasks}>
            {tasks}
        </div>
    );
}

export default Tasks;