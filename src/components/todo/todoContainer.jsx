import Todo from './todo';
import { doneTask, deleteTask, addTask, onTaskInputChange, deleteAllTasks, returnDeletedTasks, editTasks } from '../../BLL/reducers/reducerTodo';
import { connect } from 'react-redux';

let mapStatetoProps = (state) => {
    return {
        tasks: state.todolist.tasks,
        newTaskValue: state.todolist.newTaskValue,
        undo: state.todolist.undo
    }
} 

const TodoContainer = connect(mapStatetoProps, { addTask,
    onTaskInputChange, 
    doneTask, 
    deleteTask, 
    deleteAllTasks, 
    returnDeletedTasks,
    editTasks, 
})(Todo);


export default TodoContainer;