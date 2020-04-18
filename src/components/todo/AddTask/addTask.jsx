import React from 'react';
import classes from './addTask.module.css';

const AddTask = (props) => {
    return (
        <div className={classes.addTask}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h4>Your Task:</h4>
                </div>
                <div>
                    <input className={classes.input} placeholder=" What do you need to do? " type="text" />
                </div>
            </div>
            <div className={classes.btn_addTask}>
                <button>
                    Add!
                </button>
            </div>
        </div>
    );
}

export default AddTask;