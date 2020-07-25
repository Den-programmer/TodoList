import React from 'react'
import classes from './sidebar.module.css'
import { NavLink } from 'react-router-dom'

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
                        <div className={classes.generalOptions}>
                            <ul className={classes.list + ' ' + classes.generalOptionsList}>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/aboutUS">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                {/* <li><NavLink to="/developerInformation">Portfolio</NavLink></li> */}
                            </ul>
                        </div>
                        <div className={classes.tasksOptions}>
                            <h4>Tasks Filter</h4>
                            <div className={classes.horizontal_line}></div>
                            <ul className={classes.list}>
                                <li>Active Tasks</li>
                                <li>Done Tasks</li>
                                <li>All Tasks</li>
                            </ul>
                        </div>
                        <div className={classes.otherOptions}>
                            <h4>Other options</h4>
                            <div className={classes.horizontal_line}></div>
                            <ul className={classes.otherOptionsList + ' ' + classes.list}>
                                <li>Background</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}

export default Sidebar