import React from 'react'
import classes from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    // componentDidMount() {
    //     this.props.authentication()
    // }
    render() {
        return (
            <header className={classes.header}>
                <div className={classes.menuIcon}>
                    <FontAwesomeIcon onClick={this.props.setMenuStatus} className={classes.icon} icon={faBars} />
                </div>
                <div className={classes.btn_logout}>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </header>
        )
    }
}

export default Header