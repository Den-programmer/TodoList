import React, { useEffect, useState } from 'react'
import classes from './addTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUndo } from '@fortawesome/free-solid-svg-icons'

const AddTask = (props) => {
    const dispNone = { display: 'none' }
    const dispBlock = { display: 'block' }

    const [undo, setUndoStatus] = useState(dispNone)
    const [taskTitle, setTaskTitle] = useState('')
    const [error, setError] = useState(false)

    const addTask = () => {
        if (taskTitle === '') {
            setError(true)
        } else {
            props.updateAddedTask(taskTitle)
            setError(false)
            setTaskTitle('')
        }
    }
    useEffect(() => {
        const KeyPress = (e) => {
            if (e.key === "Enter") {
                addTask()
            }
        }

        document.addEventListener('keypress', KeyPress)

        return () => {
            document.removeEventListener('keypress', KeyPress)
        }
    })

    const onTaskTitleChange = (e) => setTaskTitle(e.currentTarget.value)

    const deleteAllTasks = () => {
        setUndoStatus(dispBlock)
        props.updateDeletedAllTasks()
    }
    const returnPrevTasks = () => {
        setUndoStatus(dispNone)
        props.updateUndoDeletedTasks()
    }
    return (
        <div className={classes.addTask}>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div className={classes.title}>
                        <h4>Your Task:</h4>
                    </div>
                    <div>
                        <input onChange={onTaskTitleChange} value={taskTitle} title="Enter your task!"
                            className={classes.input}
                            placeholder=" What do you need to do? "
                            type="text" />
                    </div>
                </div>
                <div className={classes.unitingFlex}>
                    <div className={classes.managePanel}>
                        <div className={classes.deleteAllTasks}>
                            <div>
                                <FontAwesomeIcon title="Remove all tasks!" onClick={deleteAllTasks} className={classes.trashCan} icon={faTrashAlt} />
                            </div>
                            <div style={{ display: undo.display }}>
                                <FontAwesomeIcon title="Restore deleted tasks!" onClick={returnPrevTasks} className={classes.undo} icon={faUndo} />
                            </div>
                        </div>
                    </div>
                    {error && <div className={classes.error}>
                        <p>Enter task's title!</p>
                    </div>}
                    <div className={classes.btn_addTask}>
                        <button onClick={addTask} title="Add new item!">
                            Add!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddTask