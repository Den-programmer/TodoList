import React from 'react';
import classes from './deleteAllTasks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DeleteAllTasks = (props) => {

    let deleteAllTasks = () => {
        props.deleteAllTasks();
    } 
    let returnPrevTasks = () => {
        
    }

    return (
        <div className={classes.deleteAllTasks}>
            <FontAwesomeIcon onClick={ deleteAllTasks } className={classes.trashCan} icon={faTrashAlt}/>
            {/* <FontAwesomeIcon onClick={ returnPrevTasks } icon={faUndo}/> */}
        </div>
    );
}

export default DeleteAllTasks;