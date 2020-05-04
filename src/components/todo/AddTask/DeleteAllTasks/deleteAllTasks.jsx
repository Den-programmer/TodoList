import React from 'react';
import classes from './deleteAllTasks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUndo } from '@fortawesome/free-solid-svg-icons';

const DeleteAllTasks = (props) => {
    const style = { display: props.undo.display }

    let deleteAllTasks = () => {
        props.deleteAllTasks();
    }
    let returnPrevTasks = () => {
        props.returnDeletedTasks();
    }

    return (
        <div className={classes.deleteAllTasks}>
            <div>
                <FontAwesomeIcon title="Remove all tasks!" onClick={deleteAllTasks} className={classes.trashCan} icon={faTrashAlt} />
            </div>
            <div style={ style }>
                <FontAwesomeIcon title="Restore deleted tasks!" onClick={returnPrevTasks} className={classes.undo} icon={faUndo} />
            </div>
        </div>
    );
}

export default DeleteAllTasks;