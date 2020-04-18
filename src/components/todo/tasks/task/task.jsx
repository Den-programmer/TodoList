import React from 'react';
import classes from './task.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';

const Task = (props) => {
    return (
        <div className={classes.task}>
            <div className={classes.title}>
                <h6>Title todo</h6>
            </div>
            <div className={classes.DefaultButtons}>
                <div className={classes.btn_done}>
                    <FontAwesomeIcon className={classes.imgDone} icon={faCheckSquare}  />       
                </div>
                <div className={classes.btn_close}>
                    <FontAwesomeIcon className={classes.imgClose} icon={faWindowClose} />
                </div>
            </div>
        </div>
    );
}

export default Task;