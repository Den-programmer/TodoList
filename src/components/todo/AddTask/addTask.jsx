import React from 'react'
import classes from './addTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUndo } from '@fortawesome/free-solid-svg-icons'

class AddTask extends React.Component {
    state = {
        undo: {
            display: 'none'
        },
        taskTitle: '',
        error: false
    }

    addTask = () => {
        if (this.state.taskTitle === '') {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false,
                taskTitle: '' 
            })
            this.props.updateAddedTask(this.state.taskTitle)
        }
    }

    onTaskTitleChange = (e) => {
        this.setState({
            taskTitle: e.currentTarget.value
        })
    }

    deleteAllTasks = () => {
        this.setState({
            undo: {
                display: 'block'
            }
        })
        this.props.updateDeletedAllTasks()
    }
    returnPrevTasks = () => {
        this.setState({
            undo: {
                display: 'none'
            }
        })
        this.props.updateUndoDeletedTasks()
    }
    render() {
        return (
            <div className={classes.addTask}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div className={classes.title}>
                            <h4>Your Task:</h4>
                        </div>
                        <div>
                            <input onChange={this.onTaskTitleChange} value={this.state.taskTitle} title="Enter your task!"
                                ref={ this.addTaskInput }
                                className={classes.input}
                                placeholder=" What do you need to do? "
                                type="text" />
                        </div>
                    </div>
                    <div className={classes.unitingFlex}>
                        <div className={classes.managePanel}>
                            <div className={classes.deleteAllTasks}>
                                <div>
                                    <FontAwesomeIcon title="Remove all tasks!" onClick={this.deleteAllTasks} className={classes.trashCan} icon={faTrashAlt} />
                                </div>
                                <div style={{ display: this.state.undo.display }}>
                                    <FontAwesomeIcon title="Restore deleted tasks!" onClick={this.returnPrevTasks} className={classes.undo} icon={faUndo} />
                                </div>
                            </div>
                        </div>
                        {this.state.error && <div className={classes.error}>
                            <p>Enter task's title!</p>
                        </div>}
                        <div className={classes.btn_addTask}>
                            <button onClick={this.addTask} title="Add new item!">
                                Add!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask