import { connect } from "react-redux"
import HeaderTodo from "./headerTodo"
import { authentication } from '../../../BLL/reducers/reducerAuth'
import { setFilterTerm } from '../../../BLL/reducers/reducerTodo'

const mapStateToProps = (state) => ({
    
})

const HeaderTodoContainer = connect(mapStateToProps, { authentication, setFilterTerm })(HeaderTodo)

export default HeaderTodoContainer