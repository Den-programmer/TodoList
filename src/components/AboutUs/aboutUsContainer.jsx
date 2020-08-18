import { connect } from 'react-redux'
import AboutUs from './aboutUs'

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
}) 

const AboutUsContainer = connect(mapStateToProps, {  })(AboutUs)

export default AboutUsContainer