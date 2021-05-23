import { connect } from 'react-redux'
import TaskFilter from './taskFilter'
import { chooseAllTasks, chooseActiveTasks, chooseDoneTasks } from '../../../BLL/reducers/reducerTodo'

const mapStateToProps = (state) => ({
    isAllTasks: state.todolist.isAllTasks,
    isActiveTasks: state.todolist.isActiveTasks,
    isDoneTasks: state.todolist.isDoneTasks
})

const TaskFilterContainer = connect(mapStateToProps, 
    { chooseAllTasks, chooseActiveTasks, chooseDoneTasks })(TaskFilter)

export default TaskFilterContainer