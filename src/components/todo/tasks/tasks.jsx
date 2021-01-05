import React from 'react'
import classes from './tasks.module.css'
import Task from './task/task'
import sadSmile from '../../../images/Smiles/sadSmile.png'

const Tasks = (props) => {
    const createTasks = (tasks) => {
        return tasks.filter((item) => {
            if(props.term !== '') {
                if(item.title.indexOf(props.term) > -1) return true
            } else {
                return true
            }
        }).map(task => {
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
    }
    
    const tasks = createTasks(props.tasks)
    const activeTasks = createTasks(props.activeTasks)
    const doneTasks = createTasks(props.doneTasks)

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