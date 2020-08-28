import { connect } from 'react-redux'
import Login from './login'
import { login, authentication } from '../../BLL/reducers/reducerAuth'

const mapStateToProps = (state) => ({
    rememberMe: state.auth.rememberMe
})

const LoginContainer = connect(mapStateToProps, { login, authentication })(Login)

export default LoginContainer