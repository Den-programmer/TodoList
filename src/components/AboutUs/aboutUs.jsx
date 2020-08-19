import React from 'react'
import classes from './aboutUs.module.css'
import { Redirect, NavLink } from 'react-router-dom'
import LoginContainer from '../Login/loginContainer'

const AboutUs = ({ isAuth }) => {

    let startNow = () => {
        if(isAuth) return <Redirect to="/"/>

        return <LoginContainer />
    }

    return (
        <div className={classes.website}>
            <div className={classes.title}>
                <h1>Get everything in order with TodoList</h1>
                <div className={classes.btn_startNow}>
                    <NavLink onClick={startNow} to="/">Start now!</NavLink>
                </div>
            </div>
        </div>
    )
}

export default AboutUs