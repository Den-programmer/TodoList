import { connect } from 'react-redux'
import Header from './header'
import { setMenuStatus } from '../../BLL/reducers/reducerSidebar'
 
let mapStateToProps = (state) => ({

})

const HeaderContainer = connect(mapStateToProps, { setMenuStatus })(Header)

export default HeaderContainer