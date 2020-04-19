import React, { createRef } from 'react';
import classes from './addTask.module.css';

const AddTask = (props) => {
    let additionTaskInput = React.createRef();
    let HiddenContainer = React.createRef();

    let addTask = () => {
        let taskTitle = additionTaskInput.current.value;
        if (taskTitle == '') {
            HiddenContainer.current.style.display = 'block';
        } else {
            props.addTask(taskTitle);
            HiddenContainer.current.style.display = 'none';
        }
    } 
    let onTaskInputChange = () => {
        let newTaskValue = additionTaskInput.current.value;
        props.onTaskInputChange(newTaskValue);
    }

    return (
        <div className={classes.addTask}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h4>Your Task:</h4>
                </div>
                <div>
                    <input title="Enter your task!" onChange={ onTaskInputChange } ref={additionTaskInput} className={classes.input} placeholder=" What do you need to do? " type="text" value={props.newTaskValue}/>
                </div>
            </div>
            <div ref={HiddenContainer} className={classes.containerHidden}>
                <div className={classes.warningRedText}>
                    <p>You entered nothing!</p>
                </div>
            </div>
            <div className={classes.btn_addTask}>
                <button title="Add new item!" onClick={ addTask }>
                    Add!
                </button>
            </div>
        </div>
    );
}

export default AddTask;