import React from 'react';
import classes from './task.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';

const Task = (props) => {   
    let title = React.createRef();

    let doneTask = (e) => {
        let titleTask = title.current;
        let currentId = Number(e.currentTarget.parentNode.parentNode.getAttribute("Id"));
        props.doneTask(currentId, titleTask);
    }

    let deleteTask = (e) => {
        let currentId = Number(e.currentTarget.parentNode.parentNode.getAttribute("Id"));
        props.deleteTask(currentId);
    }

    return (
        <div id={props.id} className={classes.task}>
            <div className={classes.title}>
                <h6 ref={title}>{props.title}</h6>
            </div>
            <div className={classes.DefaultButtons}>
                <div onClick={ doneTask } className={classes.btn_done}>
                    <FontAwesomeIcon className={classes.imgDone} icon={faCheckSquare}  />       
                </div>
                <div onClick={ deleteTask } className={classes.btn_close}>
                    <FontAwesomeIcon className={classes.imgClose} icon={faWindowClose} />
                </div>
            </div>
        </div>
    );
}

export default Task;