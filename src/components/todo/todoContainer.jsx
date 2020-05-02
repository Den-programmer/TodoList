import Todo from './todo';
import { doneTask, deleteTask, addTask, onTaskInputChange, deleteAllTasks } from '../../BLL/reducers/reducerTodo';
import { connect } from 'react-redux';

let mapStatetoProps = (state) => {
    return {
        tasks: state.todolist.tasks,
        newTaskValue: state.todolist.newTaskValue,
    }
} 

const TodoContainer = connect(mapStatetoProps, { addTask, onTaskInputChange, doneTask, deleteTask, deleteAllTasks })(Todo);


export default TodoContainer;