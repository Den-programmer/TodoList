import React from 'react'
import classes from './headerTodo.module.css'

class HeaderTodo extends React.Component {
    componentDidMount() {
        this.props.authentication()
    }
    render() {
        return (
            <header>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h1 title="Best wishes your TodoList!">TodoList</h1>
                    </div>
                    <div className={classes.search}>
                        <input title="Search!" className={classes.input} type="text" placeholder="Search..."/>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderTodo