import { connect } from 'react-redux'
import Sidebar from './sidebar'
import { chooseAllTasks, chooseActiveTasks, chooseDoneTasks, filterActiveTasks, filterDoneTasks, setIsBackgroundModalActiveStatus } from '../../BLL/reducers/reducerTodo'
import { setMenuItemStatusHovered } from '../../BLL/reducers/reducerSidebar'

const mapStateToProps = (state) => ({
    isMenuActive: state.sidebar.isMenuActive,
    isAllTasks: state.todolist.isAllTasks,
    isActiveTasks: state.todolist.isActiveTasks,
    isDoneTasks: state.todolist.isDoneTasks,
    isBackgroundModalActive: state.todolist.isBackgroundModalActive,
    menu: state.sidebar.menu
})

const SidebarContainer = connect(mapStateToProps, 
    { chooseAllTasks, chooseActiveTasks, chooseDoneTasks, filterActiveTasks, filterDoneTasks, setMenuItemStatusHovered,
    setIsBackgroundModalActiveStatus })(Sidebar)

export default SidebarContainer 