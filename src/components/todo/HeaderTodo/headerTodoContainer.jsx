import { connect } from "react-redux"
import HeaderTodo from "./headerTodo"
import { authentication } from '../../../BLL/reducers/reducerAuth'

let mapStateToProps = (state) => ({
    
})

const HeaderTodoContainer = connect(mapStateToProps, { authentication })(HeaderTodo)

export default HeaderTodoContainer