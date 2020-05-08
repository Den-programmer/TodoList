import React from 'react';
import classes from './task.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';

const Task = (props) => {   
    let editingInput = React.createRef(); 

    const style = { display: props.searchTasksStyles.display }

    let doneTask = (e) => {
        let currentId = Number(e.currentTarget.parentNode.parentNode.getAttribute("Id"));
        props.doneTask(currentId);
    }

    let deleteTask = (e) => {
        let currentId = Number(e.currentTarget.parentNode.parentNode.getAttribute("Id"));
        props.deleteTask(currentId);
    }

    let editTask = (event) => {
        let currentId = Number(event.currentTarget.parentNode.parentNode.getAttribute("Id"));
        props.editTasks(currentId);
    }

    let finishEditTask = (event) => {
        let taskValue = editingInput.current.value;
        let currentId = Number(event.currentTarget.parentNode.parentNode.getAttribute("Id"));
        props.finishEditTasks(currentId, taskValue);
    }

    let onEditInputChange = (event) => {
        let currentId = Number(event.currentTarget.parentNode.parentNode.getAttribute("Id"));
        let taskValue = editingInput.current.value;
        props.onEditInputChange(taskValue, currentId);
    }

    return (
        <div id={props.id} className={classes.task}>
            <div className={classes.title}>
            {props.isEdit ? <input autoFocus={true} 
                                   onChange={ onEditInputChange } 
                                   ref={ editingInput } 
                                   title="Edit your task!" 
                                   onBlur={ finishEditTask } 
                                   value={props.title} 
                                   className={classes.editing} 
                                   placeholder="Enter something..."/> 
                                   : props.done ? 
                                   <h6 style={ style } className={classes.tdLineThrough}>{props.title}</h6> 
                                   : <h6 style={ style } title="Click to edit!" onClick={ editTask } className={classes.tdNone}>{props.title}</h6>}
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
    );
}

export default Task;