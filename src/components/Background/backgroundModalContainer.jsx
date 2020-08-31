import { connect } from 'react-redux'
import BackgroundModal from './backgroundModal'
import { setIsBackgroundModalActiveStatus, setBackground } from '../../BLL/reducers/reducerTodo'

const mapStateToProps = (state) => ({
    backgrounds: state.todolist.backgrounds
})

const BackgroundModalContainer = connect(mapStateToProps, { setIsBackgroundModalActiveStatus, setBackground })(BackgroundModal)

export default BackgroundModalContainer