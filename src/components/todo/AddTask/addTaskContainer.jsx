import { connect } from "react-redux"
import AddTask from './addTask'
import { updateUndoDeletedTasks,  updateDeletedAllTasks, updateAddedTask } from '../../../BLL/reducers/reducerTodo'

const AddTaskContainer = connect(null, { updateUndoDeletedTasks,  updateDeletedAllTasks, updateAddedTask })(AddTask)

export default AddTaskContainer

