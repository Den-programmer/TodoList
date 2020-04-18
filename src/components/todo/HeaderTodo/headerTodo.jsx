import React from 'react';
import classes from './headerTodo.module.css';

const HeaderTodo = (props) => {
    return (
        <header>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>TodoList</h1>
                </div>
                <div className={classes.search}>
                    <input className={classes.input} type="text" placeholder="Search..."/>
                </div>
            </div>
        </header>
    );
}

export default HeaderTodo;