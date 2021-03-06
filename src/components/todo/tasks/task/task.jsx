import React from 'react'
import classes from './task.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons'

const Task = (props) => {   
    const taskRef = React.createRef()
    const doneTask = () => {
        props.updateDoneTask(props.id)
    }

    const deleteTask = () => {
        props.deleteTask(props.id)
    }

    const editTask = () => {
        props.editTasks(props.id)
    }

    const finishEditTask = (e) => {
        let taskValue = e.currentTarget.value
        props.finishEditTasks(props.id, taskValue)
    }

    const onEditInputChange = (e) => {
        let taskValue = e.currentTarget.value
        props.onEditInputChange(taskValue, props.id)
    }

    document.addEventListener('click', e => {
        if(taskRef.current && !taskRef.current.contains(e.target)) {
            props.finishEditing()
        }
    })

    return (
        <div ref={taskRef} id={props.id} className={classes.task}>
            <div className={classes.title}>
            {props.isEdit ? <input autoFocus={true} 
                                   onChange={ onEditInputChange } 
                                   title="Edit your task!" 
                                   onBlur={ finishEditTask } 
                                   value={props.title} 
                                   className={classes.editing} 
                                   placeholder="Enter something..."/> 
                                   : props.done ? 
                                   <h6 className={classes.tdLineThrough}>{props.title}</h6> 
                                   : <h6 title="Click to edit!" onClick={ editTask } className={classes.tdNone}>{props.title}</h6>}
            </div>
            <div className={classes.DefaultButtons}>
                <div title="Mark as Done!" onClick={ doneTask } className={classes.btn_done}>
                    <FontAwesomeIcon className={classes.imgDone} icon={faCheckSquare}  />       
                </div>
                <div title="Delete!" onClick={ deleteTask } className={classes.btn_close}>
                    <FontAwesomeIcon className={classes.imgClose} icon={faWindowClose} />
                </div>
            </div>
        </div>
    )
}

export default Task