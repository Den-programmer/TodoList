import React from 'react';
import classes from './todo.module.css';
import Tasks from './tasks/tasks';
import HeaderTodo from './HeaderTodo/headerTodo';
import AddTask from './AddTask/addTask';

const Todo = (props) => {
    return (
        <div className={classes.todo}>
            <HeaderTodo />
            <Tasks tasks={props.tasks} 
            doneTask={props.doneTask} 
            deleteTask={props.deleteTask}/>
            <AddTask editTasks={props.editTasks} undo={props.undo}
            returnDeletedTasks={props.returnDeletedTasks}
            deleteAllTasks={props.deleteAllTasks} 
            newTaskValue={props.newTaskValue} 
            onTaskInputChange={props.onTaskInputChange} 
            addTask={props.addTask}/>
        </div>
    );
}

export default Todo;