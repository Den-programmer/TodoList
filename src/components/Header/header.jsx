import React from 'react'
import classes from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'

class Header extends React.Component {
    redirectToLogin = () => <Redirect to="/login" />
    turnMenuIconHandleClick = () => {
        this.props.setMenuStatus()
    }
    closeMenuIconHandleClick = () => {
        this.props.setMenuStatus()
    }
    render() {
        return (
            <header className={classes.header}>
                <div className={classes.menuIcon}>
                    {!this.props.isMenuActive ? <FontAwesomeIcon onClick={this.turnMenuIconHandleClick} className={classes.iconTurnTheMenu} icon={faBars} /> :
                        <FontAwesomeIcon onClick={this.closeMenuIconHandleClick} className={classes.iconCloseTheMenu} icon={faTimes} />}
                </div>
                <div className={classes.btn_logout}>
                    {this.props.isAuth ? <button onClick={this.props.logout}>Logout</button> :
                        <button onClick={this.redirectToLogin}>Login</button>}
                </div>
            </header>
        )
    }
}

export default Header