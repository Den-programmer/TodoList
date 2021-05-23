import { connect } from "react-redux"
import HeaderTodo from "./headerTodo"
import { setFilterTerm } from '../../../BLL/reducers/reducerTodo'

const mapStateToProps = (state) => ({
    
})

const HeaderTodoContainer = connect(mapStateToProps, { setFilterTerm })(HeaderTodo)

export default HeaderTodoContainer