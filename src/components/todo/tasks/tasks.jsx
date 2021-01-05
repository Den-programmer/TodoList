import React from 'react'
import classes from './tasks.module.css'
import Task from './task/task'
import sadSmile from '../../../images/Smiles/sadSmile.png'

const Tasks = (props) => {
    const tasks = props.tasks.map(task => {
        return <Task finishEditing={props.finishEditing} onEditInputChange={props.onEditInputChange}
            isEdit={task.isEdit}
            errorEditText={props.errorEditText}
            editTasks={props.editTasks}
            finishEditTasks={props.finishEditTasks}
            key={task.id} id={task.id}
            title={task.title}
            done={task.done} doneTask={props.doneTask}
            deleteTask={props.deleteTask} />
    })
    const activeTasks = props.activeTasks.map(task => {
        return <Task finishEditing={props.finishEditing} onEditInputChange={props.onEditInputChange}
            isEdit={task.isEdit}
            errorEditText={props.errorEditText}
            editTasks={props.editTasks}
            finishEditTasks={props.finishEditTasks}
            key={task.id} id={task.id}
            title={task.title}
            done={task.done} doneTask={props.doneTask}
            deleteTask={props.deleteTask} />
    })
    const doneTasks = props.doneTasks.map(task => {
        return <Task finishEditing={props.finishEditing} onEditInputChange={props.onEditInputChange}
            isEdit={task.isEdit}
            errorEditText={props.errorEditText}
            editTasks={props.editTasks}
            finishEditTasks={props.finishEditTasks}
            key={task.id} id={task.id}
            title={task.title}
            done={task.done} doneTask={props.doneTask}
            deleteTask={props.deleteTask} />
    })
    const noTasks = <div className={classes.noTasks}><h2 className={classes.titleNoTasks}>You do not have any tasks!</h2><img src={sadSmile} alt="sad smile" /></div>
    return (
        <div className={classes.tasks}>
            {props.isAllTasks ? tasks.length !== 0 ? tasks : noTasks : null}
            {props.isActiveTasks ? activeTasks.length !== 0 ? activeTasks : noTasks : null}
            {props.isDoneTasks ? doneTasks.length !== 0 ? doneTasks : noTasks : null}
        </div>
    )
}

export default Tasks