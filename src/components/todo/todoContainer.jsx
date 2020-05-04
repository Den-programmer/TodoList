import Todo from './todo';
import { doneTask, deleteTask, addTask, onTaskInputChange, deleteAllTasks, returnDeletedTasks, editTasks, finishEditTasks, onEditInputChange } from '../../BLL/reducers/reducerTodo';
import { connect } from 'react-redux';

let mapStatetoProps = (state) => {
    return {
        tasks: state.todolist.tasks,
        newTaskValue: state.todolist.newTaskValue,
        undo: state.todolist.undo,
        errorEditText: state.todolist.errorEditText
    }
} 

const TodoContainer = connect(mapStatetoProps, { addTask,
    onTaskInputChange, 
    doneTask, 
    deleteTask, 
    deleteAllTasks, 
    returnDeletedTasks,
    editTasks, 
    onEditInputChange,
    finishEditTasks
})(Todo);


export default TodoContainer;