import React from 'react';
import classes from './todo.module.css';
import TasksContainer from './tasks/tasksContainer';
import HeaderTodoContainer from './HeaderTodo/headerTodoContainer';
import AddTaskContainer from './AddTask/addTaskContainer';

const Todo = (props) => {
    return (
        <div className={classes.todo}>
            <HeaderTodoContainer />
            <TasksContainer />
            <AddTaskContainer />
        </div>
    );
}

export default Todo;