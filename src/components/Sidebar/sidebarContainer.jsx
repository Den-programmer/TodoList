import { connect } from 'react-redux'
import Sidebar from './sidebar'
import { setIsBackgroundModalActiveStatus } from '../../BLL/reducers/reducerTodo'
import { setMenuItemStatusHovered, setSidebarWidth, setMenuStatus } from '../../BLL/reducers/reducerSidebar'

const mapStateToProps = (state) => ({
    isMenuActive: state.sidebar.isMenuActive,
    isBackgroundModalActive: state.todolist.isBackgroundModalActive,
    menu: state.sidebar.menu,
    sidebarWidth: state.sidebar.sidebarWidth
})

const SidebarContainer = connect(mapStateToProps, {  setMenuItemStatusHovered, setIsBackgroundModalActiveStatus, setSidebarWidth, setMenuStatus })(Sidebar)

export default SidebarContainer 