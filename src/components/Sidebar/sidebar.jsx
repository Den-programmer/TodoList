import React from 'react'
import classes from './sidebar.module.css'

const Sidebar = ({ isMenuActive }) => {
    return (
        <React.Fragment>
            {isMenuActive && <div className={classes.block}>
                <div className={classes.sidebar}>
                    <div className={classes.title}>
                        <h3>Menu</h3>
                    </div>
                    <div className={classes.horizontal_line}></div>
                    <div className={classes.options}>
                        <ul className={classes.list}>
                            <li>Active Tasks</li>
                            <li>Done Tasks</li>
                            <li>All Tasks</li>
                        </ul>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}

export default Sidebar