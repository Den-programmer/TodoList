import React from 'react'
import classes from './headerTodo.module.css'

const HeaderTodo = (props) => {
    const onSearchChange = (e) => {
        props.setFilterTerm(e.currentTarget.value)
    }

    return (
        <header>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1 title="Best wishes your TodoList!">TodoList</h1>
                </div>
                <div className={classes.search}>
                    <input title="Search!" onChange={onSearchChange} className={classes.input} type="text" placeholder="Search..." />
                </div>
            </div>
        </header>
    )
}

export default HeaderTodo