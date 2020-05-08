import React from 'react';
import classes from './headerTodo.module.css';

const HeaderTodo = (props) => {
    let search = React.createRef();

    let onSearchChange = () => {
        let searchValue = search.current.value;
        props.onSearchChange(searchValue);
    }

    return (
        <header>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1 title="Best wishes your TodoList!">TodoList</h1>
                </div>
                <div className={classes.search}>
                    <input ref={ search } onChange={ onSearchChange } value={props.searchValue} title="Search!" className={classes.input} type="text" placeholder="Search..."/>
                </div>
            </div>
        </header>
    );
}

export default HeaderTodo;