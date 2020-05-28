import React from 'react';
import classes from './addTaskForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUndo } from '@fortawesome/free-solid-svg-icons';
import { reduxForm, Field } from 'redux-form';

class AddTaskForm extends React.Component {
    state = {
        undo: {
            display: 'none'
        }
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
            <form onSubmit={this.props.handleSubmit} className={classes.container}>
                <div className={classes.row}>
                    <div className={classes.title}>
                        <h4>Your Task:</h4>
                    </div>
                    <div>
                        <Field name="taskTitle"
                            component="input"
                            title="Enter your task!"
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
                    {this.props.error && <div className={classes.error}>
                        <p>{this.props.error}</p>
                    </div>}
                    <div className={classes.btn_addTask}>
                        <button title="Add new item!">
                            Add!
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
const AddTaskReduxForm = reduxForm({
    form: 'addTaskForm'
})(AddTaskForm);

export default AddTaskReduxForm;