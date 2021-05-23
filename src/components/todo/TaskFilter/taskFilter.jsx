import React from 'react'
import classes from './taskFilter.module.css'

const TaskFilter = (props) => {
     const chooseActiveTasks = () => {
        props.chooseActiveTasks()
    }
    const chooseDoneTasks = () => {
        props.chooseDoneTasks()
    }
    const chooseAllTasks = () => props.chooseAllTasks()
    
    return (
        <div className={classes.taskFilter}>
            <div onClick={chooseAllTasks} style={{ backgroundColor: '#DD5044' }} className={props.isAllTasks ? classes.filterItemActive : classes.filterItem}>
                All Tasks
            </div>
            <div onClick={chooseActiveTasks} style={{ backgroundColor: '#149F5B' }} className={props.isActiveTasks ? classes.filterItemActive : classes.filterItem}>
                Active Tasks
            </div>
            <div onClick={chooseDoneTasks} style={{ backgroundColor: '#FFCD41' }} className={props.isDoneTasks ? classes.filterItemActive : classes.filterItem}>
                Done Tasks
            </div>
        </div>
    )
}

export default TaskFilter