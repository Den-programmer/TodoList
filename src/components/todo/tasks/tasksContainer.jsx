import { connect } from "react-redux";
import Tasks from './tasks';
import { onEditInputChange, deleteTask, editTasks, finishEditTasks, doneTask } from '../../../BLL/reducers/reducerTodo';


let mapStateToProps = (state) => {
    return {
        searchTasksStyles: state.todolist.searchTasksStyles,
        tasks: state.todolist.tasks,
        errorEditText: state.todolist.errorEditText,
    }
}

const TasksContainer = connect(mapStateToProps, { onEditInputChange, deleteTask, editTasks, finishEditTasks, doneTask })(Tasks);

export default TasksContainer;