import React from 'react';
import classes from './addTask.module.css';
import DeleteAllTasks from './DeleteAllTasks/deleteAllTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUndo } from '@fortawesome/free-solid-svg-icons';

class AddTask extends React.Component {
    state = {
        undo: {
            display: 'none'
        }
    }
    additionTaskInput = React.createRef();
    HiddenContainer = React.createRef();

    addTask = () => {
        let taskTitle = this.additionTaskInput.current.value;
        if (taskTitle === '') {
            this.HiddenContainer.current.style.display = 'block';
        } else {
            this.setState({
                undo: {
                    display: 'none'
                }
            });
            this.props.addTask(taskTitle);
            this.HiddenContainer.current.style.display = 'none';
        }
    }
    onTaskInputChange = () => {
        let newTaskValue = this.additionTaskInput.current.value;
        this.props.onTaskInputChange(newTaskValue);
    }

    deleteAllTasks = () => {
        this.setState({
            undo: {
                display: 'block'
            }
        });
        this.props.deleteAllTasks();
    }
    returnPrevTasks = () => {
        this.setState({
            undo: {
                display: 'none'
            }
        });
        this.props.returnDeletedTasks();
    }

    render() {
        return (
            <div className={classes.addTask}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h4>Your Task:</h4>
                    </div>
                    <div>
                        <input title="Enter your task!" onChange={this.onTaskInputChange} ref={this.additionTaskInput} className={classes.input} placeholder=" What do you need to do? " type="text" value={this.props.newTaskValue} />
                    </div>
                </div>
                <div ref={this.HiddenContainer} className={classes.containerHidden}>
                    <div className={classes.warningRedText}>
                        <p>You entered nothing!</p>
                    </div>
                </div>
                <div className={classes.managePanel}>
                    <div className={classes.deleteAllTasks}>
                        <div>
                            <FontAwesomeIcon title="Remove all tasks!" onClick={this.deleteAllTasks} className={classes.trashCan} icon={faTrashAlt} />
                        </div>
                        <div style={{ display: this.state.undo.display }}>
                            <FontAwesomeIcon title="Restore deleted tasks!" onClick={this.returnPrevTasks} className={classes.undo} icon={faUndo} />
                        </div>
                    </div>
                    {/* <DeleteAllTasks undo={this.state.undo} returnDeletedTasks={this.props.returnDeletedTasks} deleteAllTasks={this.props.deleteAllTasks}/> */}
                    <div className={classes.btn_addTask}>
                        <button title="Add new item!" onClick={this.addTask}>
                            Add!
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;