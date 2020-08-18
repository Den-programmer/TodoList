import React from 'react'
import classes from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'
import Radium, { StyleRoot } from 'radium'
// import { fadeOutLeft, rotateOut } from 'react-animations'

class Header extends React.Component {
    // state = {
    //     style: {}
    // }
    componentDidMount() {
        // this.props.authentication()
    }
    // state = {
    //     style: {
    //         animation: 'x 1s',
    //         animationName: Radium.keyframes(fadeOutLeft, 'fadeOutLeft')
    //     }
    // }
    redirectToLogin = () => <Redirect to="/login" />
    turnMenuIconHandleClick = () => {
        // this.setState({
        //     style: {
        //         animation: 'x 1s',
        //         animationName: Radium.keyframes(rotateOut, 'rotateOut')
        //     }
        // })
        this.props.setMenuStatus()
    }
    closeMenuIconHandleClick = () => {
        // this.setState({
        //     style: {
        //         animation: 'x 1s',
        //         animationName: Radium.keyframes(fadeOutLeft, 'fadeOutLeft')
        //     }
        // })
        this.props.setMenuStatus()
    }
    render() {
        return (
            <StyleRoot>
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
            </StyleRoot>
        )
    }
}

export default Header