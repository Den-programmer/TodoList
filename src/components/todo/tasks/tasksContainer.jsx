import React from 'react'
import { connect } from "react-redux"
import Tasks from './tasks'
import { onEditInputChange, dlTask, editTasks, updateEditedTask, updateDoneTask, finishEditing, requestTasks } from '../../../BLL/reducers/reducerTodo'


const mapStateToProps = (state) => ({
    tasks: state.todolist.tasks,
    errorEditText: state.todolist.errorEditText,
    isAllTasks: state.todolist.isAllTasks,
    isActiveTasks: state.todolist.isActiveTasks,
    isDoneTasks: state.todolist.isDoneTasks,
    term: state.todolist.filter.term
})

class TasksContainer extends React.Component {
    componentDidMount() {
        this.props.requestTasks()
    }
   render() {
       return <Tasks tasks={this.props.tasks} 
       errorEditText={this.props.errorEditText} isAllTasks={this.props.isAllTasks} isActiveTasks={this.props.isActiveTasks} 
       isDoneTasks={this.props.isDoneTasks} activeTasks={this.props.activeTasks} doneTasks={this.props.doneTasks} term={this.props.term}
       onEditInputChange={this.props.onEditInputChange} deleteTask={this.props.dlTask} editTasks={this.props.editTasks} 
       finishEditTasks={this.props.updateEditedTask} updateDoneTask={this.props.updateDoneTask} finishEditing={this.props.finishEditing}/>
   }
}

const TasksConnected = connect(mapStateToProps, 
    { onEditInputChange, dlTask, editTasks, updateEditedTask, updateDoneTask, finishEditing, requestTasks })(TasksContainer)

export default TasksConnected