import React from 'react'
import classes from './tasks.module.css'
import Task from './task/task'
import  sadSmile  from '../../../images/Smiles/sadSmile.png'

const Tasks = (props) => {
    const tasks = props.tasks.map((task) => {
        return <Task onEditInputChange={props.onEditInputChange} 
                     isEdit={task.isEdit}
                     errorEditText={props.errorEditText} 
                     editTasks={props.editTasks} 
                     finishEditTasks={props.finishEditTasks} 
                     key={task.id} id={task.id} 
                     title={task.title} 
                     done={task.done} doneTask={props.doneTask} 
                     deleteTask={props.deleteTask}/>
    })
    return (
        <div className={classes.tasks}>
            {tasks.length !== 0 ? tasks : 
            <div className={classes.noTasks}><h2 className={classes.titleNoTasks}>You do not have some tasks!</h2><img src={sadSmile} alt="sad smile"/></div>}
        </div>
    )
}

export default Tasks