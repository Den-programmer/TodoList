import { connect } from "react-redux"
import HeaderTodo from "./headerTodo"
import { authentication } from '../../../BLL/reducers/reducerAuth'
import { search } from './../../../BLL/reducers/reducerTodo'

let mapStateToProps = (state) => ({
    
})

const HeaderTodoContainer = connect(mapStateToProps, { authentication, search })(HeaderTodo)

export default HeaderTodoContainer