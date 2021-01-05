import { connect } from "react-redux"
import Tasks from './tasks'
import { onEditInputChange, deleteTask, editTasks, finishEditTasks, doneTask, finishEditing } from '../../../BLL/reducers/reducerTodo'


const mapStateToProps = (state) => ({
    searchTasksStyles: state.todolist.searchTasksStyles,
    tasks: state.todolist.tasks,
    errorEditText: state.todolist.errorEditText,
    isAllTasks: state.todolist.isAllTasks,
    isActiveTasks: state.todolist.isActiveTasks,
    isDoneTasks: state.todolist.isDoneTasks,
    activeTasks: state.todolist.activeTasks,
    doneTasks: state.todolist.doneTasks 
})

const TasksContainer = connect(mapStateToProps, { onEditInputChange, deleteTask, editTasks, finishEditTasks, doneTask, finishEditing })(Tasks)

export default TasksContainer