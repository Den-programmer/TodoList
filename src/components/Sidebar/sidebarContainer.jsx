import { connect } from 'react-redux'
import Sidebar from './sidebar'

const mapStateToProps = (state) => ({
    isMenuActive: state.sidebar.isMenuActive
})

const SidebarContainer = connect(mapStateToProps, {  })(Sidebar)

export default SidebarContainer 