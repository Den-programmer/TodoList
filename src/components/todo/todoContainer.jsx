import Todo from './todo';
import { doneTaskAC, deleteTaskAC, addTaskAC } from '../../BLL/reducers/reducerTodo';
import { connect } from 'react-redux';

let mapStatetoProps = (state) => {
    return {
        tasks: state.todolist.tasks,
    }
} 
let mapDispatchToProps = (dispatch) => {
    return {
        addTask:() => {
            dispatch(addTaskAC());
        },
        doneTask:() => {
            dispatch(doneTaskAC());
        },
        deleteTask:(taskID) => {
            dispatch(deleteTaskAC(taskID));
        },
    }
}

const TodoContainer = connect(mapStatetoProps, mapDispatchToProps)(Todo);


export default TodoContainer;