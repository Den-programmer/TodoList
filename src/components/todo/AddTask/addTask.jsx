import React from 'react';
import classes from './addTask.module.css';
import AddTaskReduxForm from './addTaskForm/addTaskForm';

class AddTask extends React.Component {
    // О ошибке не забудь!
    addTask = (FormData) => {
        this.props.addTask(FormData.taskTitle);
    }
    render() {
        return (
            <div className={classes.addTask}>
                <AddTaskReduxForm onSubmit={this.addTask} {...this.props} />
            </div>
        );
    }
}

export default AddTask;