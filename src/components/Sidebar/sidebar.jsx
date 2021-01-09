import React from 'react'
import classes from './sidebar.module.css'
// import  Radium, { StyleRoot } from 'radium'
// import { fadeInLeft } from 'react-animations'
import { NavLink } from 'react-router-dom'
import BackgroundModalContainer from '../Background/backgroundModalContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = (props) => {
    // const style = {
    //     animation: 'x 1s',
    //     animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    // }

    // const chooseActiveTasks = () => {
    //     props.chooseActiveTasks()
    //     props.filterActiveTasks()
    // }
    // const chooseDoneTasks = () => {
    //     props.chooseDoneTasks()
    //     props.filterDoneTasks()
    // }
    // const chooseAllTasks = () => props.chooseAllTasks()

    const commonListItemStyle = { color: 'rgba(255, 255, 255, 0.6)' }
    const hoveredListItemStyle = { color: '#FFF' }


    // <li><a href="portfolio">Portfolio</a></li> 
    // <li className={props.isActiveTasks ? classes.active : ''} onClick={chooseActiveTasks}>Active Tasks</li>
    // <li className={props.isDoneTasks ? classes.active : ''} onClick={chooseDoneTasks}>Done Tasks</li>
    // <li className={props.isAllTasks ? classes.active : ''} onClick={chooseAllTasks}>All Tasks</li>

    const menuItems = props.menu.map(item => {
        const listIcon = <div className={classes.listIconWrapper}>
            <FontAwesomeIcon className={classes.listIcon} style={item.isHovered ? hoveredListItemStyle : commonListItemStyle} icon={item.icon} />
        </div>
        const ListItem = ({ children }) => {
            return <li onMouseEnter={() => props.setMenuItemStatusHovered(item.id, true)}
                onMouseLeave={() => props.setMenuItemStatusHovered(item.id, false)}
                className={classes.listItem} onClick={item.title === 'Background' ? () => props.setIsBackgroundModalActiveStatus(true) : null}>
                {listIcon}
                {children}
            </li>
        }
        return item.isItOption ? <ListItem key={item.id}>
            <a style={item.isHovered ? hoveredListItemStyle : commonListItemStyle} className={classes.navLink}>{item.title}</a>
        </ListItem> :
        item.isItLink ? <ListItem key={item.id}>
            <a style={item.isHovered ? hoveredListItemStyle : commonListItemStyle} className={classes.navLink} href={item.href}>{item.title}</a>
        </ListItem> :
        <ListItem key={item.id}>
            <NavLink style={item.isHovered ? hoveredListItemStyle : commonListItemStyle} className={classes.navLink} to={item.path}>
                {item.title}
            </NavLink>
        </ListItem>
    })

    return (
        <div className={classes.root}>
            {props.isMenuActive && <div className={classes.sidebarWrapper}>
                <div className={classes.sidebar}>
                    {/* <div className={classes.authorizedUser}>
                        <div className={classes.avatar}>
                            <img src={} alt=""/>
                        </div>
                        <div className={classes.username}>
                            <p>Username</p>
                        </div>
                    </div> */}
                    <ul className={classes.list}>
                        {menuItems}
                    </ul>
                </div>
            </div>}
            {props.isBackgroundModalActive && <BackgroundModalContainer />}
        </div>
    )
}

export default Sidebar