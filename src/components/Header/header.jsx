import React from 'react'
import classes from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.menuIcon}>
                <FontAwesomeIcon onClick={props.setMenuStatus} className={classes.icon} icon={faBars}/>        
            </div>
            <div className={classes.btn_logout}>
                <button onClick={props.logout}>Logout</button>
            </div>  
        </header>
    )
}

export default Header