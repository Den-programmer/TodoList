import { connect } from 'react-redux'
import Sidebar from './sidebar'
import { setIsBackgroundModalActiveStatus } from '../../BLL/reducers/reducerTodo'
import { setMenuItemStatusHovered } from '../../BLL/reducers/reducerSidebar'

const mapStateToProps = (state) => ({
    isMenuActive: state.sidebar.isMenuActive,
    isBackgroundModalActive: state.todolist.isBackgroundModalActive,
    menu: state.sidebar.menu
})

const SidebarContainer = connect(mapStateToProps, {  setMenuItemStatusHovered, setIsBackgroundModalActiveStatus })(Sidebar)

export default SidebarContainer 