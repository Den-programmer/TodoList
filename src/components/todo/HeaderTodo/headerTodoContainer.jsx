import { connect } from "react-redux";
import HeaderTodo from "./headerTodo";
import { onSearchChange } from '../../../BLL/reducers/reducerTodo';

let mapStateToProps = (state) => {
    return {
        searchValue: state.todolist.searchValue
    }
}

const HeaderTodoContainer = connect(mapStateToProps, { onSearchChange })(HeaderTodo);

export default HeaderTodoContainer;