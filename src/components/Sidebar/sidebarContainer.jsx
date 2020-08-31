import { connect } from 'react-redux'
import Sidebar from './sidebar'
import { chooseAllTasks, chooseActiveTasks, chooseDoneTasks, filterActiveTasks, filterDoneTasks, setIsBackgroundModalActiveStatus } from '../../BLL/reducers/reducerTodo'

const mapStateToProps = (state) => ({
    isMenuActive: state.sidebar.isMenuActive,
    isAllTasks: state.todolist.isAllTasks,
    isActiveTasks: state.todolist.isActiveTasks,
    isDoneTasks: state.todolist.isDoneTasks,
    isBackgroundModalActive: state.todolist.isBackgroundModalActive
})

const SidebarContainer = connect(mapStateToProps, 
    { chooseAllTasks, chooseActiveTasks, chooseDoneTasks, filterActiveTasks, filterDoneTasks, 
    setIsBackgroundModalActiveStatus })(Sidebar)

export default SidebarContainer 