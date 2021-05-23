import { connect } from 'react-redux'
import Login from './login'
import { login, createAccount, setIsRegisterStatus } from '../../BLL/reducers/reducerAuth'

const mapStateToProps = (state) => ({
    rememberMe: state.auth.rememberMe,
    isRegister: state.auth.isRegister
})

const LoginContainer = connect(mapStateToProps, { login, createAccount, setIsRegisterStatus })(Login)

export default LoginContainer