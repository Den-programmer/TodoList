import Todo from './todo';
import { doneTaskAC, deleteTaskAC, addTaskAC, onTaskInputChangeAC } from '../../BLL/reducers/reducerTodo';
import { connect } from 'react-redux';

let mapStatetoProps = (state) => {
    console.log(state);
    return {
        tasks: state.todolist.tasks,
        newTaskValue: state.todolist.newTaskValue,
    }
} 
let mapDispatchToProps = (dispatch) => {
    return {
        addTask:(taskTitle) => {
            dispatch(addTaskAC(taskTitle));
        },
        onTaskInputChange:(newTaskValue) => {
            dispatch(onTaskInputChangeAC(newTaskValue));
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