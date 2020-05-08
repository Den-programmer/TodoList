import { connect } from "react-redux";
import AddTask from './addTask';
import { returnDeletedTasks,  deleteAllTasks, onTaskInputChange, addTask, } from '../../../BLL/reducers/reducerTodo';

let mapStateToProps = (state) => {
    return {
        undo: state.todolist.undo,
        newTaskValue: state.todolist.newTaskValue,
    }
}

const AddTaskContainer = connect(mapStateToProps, { returnDeletedTasks,  deleteAllTasks, onTaskInputChange, addTask })(AddTask);

export default AddTaskContainer;

