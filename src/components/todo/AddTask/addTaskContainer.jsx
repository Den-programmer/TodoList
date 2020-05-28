import { connect } from "react-redux";
import AddTask from './addTask';
import { returnDeletedTasks,  deleteAllTasks, addTask, } from '../../../BLL/reducers/reducerTodo';

const AddTaskContainer = connect(null, { returnDeletedTasks,  deleteAllTasks, addTask })(AddTask);

export default AddTaskContainer;

