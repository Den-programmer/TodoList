import { connect } from 'react-redux'
import Header from './header'
import { setMenuStatus } from '../../BLL/reducers/reducerSidebar'
import { logout, authentication } from '../../BLL/reducers/reducerAuth'
 
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isMenuActive: state.sidebar.isMenuActive
})

const HeaderContainer = connect(mapStateToProps, { setMenuStatus, logout, authentication })(Header)

export default HeaderContainer