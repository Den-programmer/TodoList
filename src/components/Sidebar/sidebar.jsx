import React, { useEffect, useState } from 'react'
import classes from './sidebar.module.css'
import { NavLink } from 'react-router-dom'
import BackgroundModalContainer from '../Background/backgroundModalContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = (props) => {
    const [isSmall, setIsClientWidthSmall] = useState(false)
    const commonListItemStyle = { color: 'rgba(255, 255, 255, 0.6)' }
    const hoveredListItemStyle = { color: '#FFF' }

    useEffect(() => {
        if (document.documentElement.clientWidth <= 768) {
            props.setSidebarWidth('100%')
            setIsClientWidthSmall(true)
        } else {
            props.setSidebarWidth('240px')
            setIsClientWidthSmall(false)
        }
    })

    const menuItems = props.menu.map(item => {
        const listIcon = <div className={classes.listIconWrapper}>
            <FontAwesomeIcon className={classes.listIcon} style={item.isHovered ? hoveredListItemStyle : commonListItemStyle} icon={item.icon} />
        </div>
        const ListItem = ({ children }) => {
            const clickHandler = () => {
                if(item.title === 'Background') {
                    props.setIsBackgroundModalActiveStatus(true)
                }
                if (props.sidebarWidth !== '240px') {
                    props.setMenuStatus(false)
                }
            }
            return <li onClick={clickHandler} onMouseEnter={() => props.setMenuItemStatusHovered(item.id, true)}
                onMouseLeave={() => props.setMenuItemStatusHovered(item.id, false)}
                className={classes.listItem}>
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
            {props.isMenuActive && <div style={{ minWidth: props.sidebarWidth }} className={classes.sidebarWrapper}>
                <div className={classes.sidebar}>
                    <ul className={classes.list}>
                        {menuItems}
                    </ul>
                    {isSmall && <div onClick={() => props.setMenuStatus(false)} className={classes.outer}>
                        <div className={classes.inner}>
                            <label>Back</label>
                        </div>
                    </div>}
                </div>
            </div>}
            {props.isBackgroundModalActive && <BackgroundModalContainer />}
        </div>
    )
}

export default Sidebar