import { connect } from 'react-redux'
import Login from './login'
import { login } from '../../BLL/reducers/reducerAuth'

const mapStateToProps = (state) => ({

})

const LoginContainer = connect(mapStateToProps, { login })(Login)

export default LoginContainer