import React from 'react'
import classes from './tasks.module.css'
import Task from './task/task'
import sadSmile from '../../../images/Smiles/sadSmile.png'

const Tasks = (props) => {
    const createTasks = (tasks, stringCode) => {
        const searchedTasks = tasks.filter((item) => {
            if(props.term !== '') {
                if(item.title.indexOf(props.term) > -1) return true
            } else {
                return true
            }
        })
        const filteredTasks = stringCode === 'tasks' ? searchedTasks 
        : stringCode === 'active' ? searchedTasks.filter(item => !item.done && true) : 
        searchedTasks.filter(item => item.done && true)
        return filteredTasks.map(task => {
            return <Task finishEditing={props.finishEditing} updateDoneTask={props.updateDoneTask} 
                onEditInputChange={props.onEditInputChange}
                isEdit={task.isEdit}
                errorEditText={props.errorEditText}
                editTasks={props.editTasks}
                finishEditTasks={props.finishEditTasks}
                key={task.id} id={task.id}
                title={task.title}
                done={task.done}
                deleteTask={props.deleteTask} />
        })
    }

    const tasks = createTasks(props.tasks, 'tasks')
    const activeTasks = createTasks(props.tasks, 'active')
    const doneTasks = createTasks(props.tasks, 'done')

    const noTasks = <div className={classes.noTasks}><h2 className={classes.titleNoTasks}>You do not have any tasks!</h2><img src={sadSmile} alt="sad smile" /></div>
    return (
        <div className={classes.tasks}>
            {props.isAllTasks ? tasks.length === 0 ? noTasks : tasks 
            : props.isActiveTasks ? activeTasks.length === 0 ? noTasks : activeTasks 
            : doneTasks.length === 0 ? noTasks : doneTasks}
        </div>
    )
}

export default Tasks