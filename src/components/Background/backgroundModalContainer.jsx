import { connect } from 'react-redux'
import BackgroundModal from './backgroundModal'
import { setIsBackgroundModalActiveStatus, updateBackground } from '../../BLL/reducers/reducerTodo'

const mapStateToProps = (state) => ({
    backgrounds: state.todolist.backgrounds
})

const BackgroundModalContainer = connect(mapStateToProps, { setIsBackgroundModalActiveStatus, updateBackground })(BackgroundModal)

export default BackgroundModalContainer