import React from 'react'
import classes from './sidebar.module.css'
import { NavLink } from 'react-router-dom'
import Radium, { StyleRoot } from 'radium'
import { fadeInLeft, fadeOutLeft } from 'react-animations'
import BackgroundModalContainer from '../Background/backgroundModalContainer'

const Sidebar = (props) => {
    const style = {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
    // fadeOutLeft: {
    //     animation: 'x 1s',
    //     animationName: Radium.keyframes(fadeOutLeft, 'fadeOutLeft')
    // }
    const chooseActiveTasks = () => {
        props.chooseActiveTasks()
        props.filterActiveTasks()
    }
    const chooseDoneTasks = () => {
        props.chooseDoneTasks()
        props.filterDoneTasks()
    }
    const chooseAllTasks = () => props.chooseAllTasks() 

    const openModal = () => props.setIsBackgroundModalActiveStatus(true)
    return (
        <div className={classes.rootFragment}>
            {props.isMenuActive && <StyleRoot>
                <div style={style} className={classes.block}>
                    <div className={classes.sidebar}>
                        <div className={classes.title}>
                            <h3>Menu</h3>
                        </div>
                        <div className={classes.horizontal_line}></div>
                        <div className={classes.options}>
                            <div className={classes.generalOptions}>
                                <ul className={classes.list + ' ' + classes.generalOptionsList}>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/aboutUS">About Us</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                    {/* <li><a href="portfolio">Portfolio</a></li> */}
                                </ul>
                            </div>
                            <div className={classes.tasksOptions}>
                                <h4>Tasks Filter</h4>
                                <div className={classes.horizontal_line}></div>
                                <ul className={classes.list}>
                                    <li className={props.isActiveTasks ? classes.active : ''} onClick={chooseActiveTasks}>Active Tasks</li>
                                    <li className={props.isDoneTasks ? classes.active : ''} onClick={chooseDoneTasks}>Done Tasks</li>
                                    <li className={props.isAllTasks ? classes.active : ''} onClick={chooseAllTasks}>All Tasks</li>
                                </ul>
                            </div>
                            <div className={classes.otherOptions}>
                                <h4>Other options</h4>
                                <div className={classes.horizontal_line}></div>
                                <ul className={classes.otherOptionsList + ' ' + classes.list}>
                                    <li onClick={openModal}>Background</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </StyleRoot>}
            {props.isBackgroundModalActive && <BackgroundModalContainer />}
        </div>
    )
}

export default Sidebar