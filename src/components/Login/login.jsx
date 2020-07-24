import React from 'react'
import classes from './login.module.css'
import LoginReduxForm from './loginForm/loginForm'

const Login = ({ login }) => {
    let onSubmit = (FormData) => {
        let {email, password, rememberMe} = FormData
        login(email, password, rememberMe)
    }
    return (
        <div className={classes.login}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login