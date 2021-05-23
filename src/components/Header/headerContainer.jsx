import { connect } from 'react-redux'
import Header from './header'
import { setMenuStatus } from '../../BLL/reducers/reducerSidebar'
import { logout } from '../../BLL/reducers/reducerAuth'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isMenuActive: state.sidebar.isMenuActive
})

const HeaderContainer = connect(mapStateToProps, { setMenuStatus, logout })(Header)

export default HeaderContainer