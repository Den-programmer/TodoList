import React from 'react'
import classes from './headerTodo.module.css'

class HeaderTodo extends React.Component {
    state = {
        searchVal: ''
    }
    componentDidMount() {
        this.props.authentication()
    }
    onSearchValueChanged = (e) => {
        this.setState({
            searchVal: e.currentTarget.value
        })
        this.props.search(this.state.searchVal)
    }
    render() {
        return (
            <header>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h1 title="Best wishes your TodoList!">TodoList</h1>
                    </div>
                    <div className={classes.search}>
                        <input onChange={this.onSearchValueChanged} value={this.state.searchVal} title="Search!" className={classes.input} type="text" placeholder="Search..."/>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderTodo