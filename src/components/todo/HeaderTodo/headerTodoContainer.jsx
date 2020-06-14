import { connect } from "react-redux";
import HeaderTodo from "./headerTodo";
import { authentication } from '../../../BLL/reducers/reducerAuth';
import { searchTasks } from '../../../BLL/reducers/reducerTodo';

let mapStateToProps = (state) => {
    return {
        
    }
}

const HeaderTodoContainer = connect(mapStateToProps, { authentication, searchTasks })(HeaderTodo);

export default HeaderTodoContainer;