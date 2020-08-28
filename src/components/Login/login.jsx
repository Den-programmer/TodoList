import React from 'react'
import classes from './login.module.css'
import LoginReduxForm from './loginForm/loginForm'
import { useEffect } from 'react'

const Login = ({ login, rememberMe, authentication }) => {
    useEffect(() => {
        rememberMe && authentication()
    }, []) 
    const onSubmit = (FormData) => {
        const {email, password, rememberMe} = FormData
        login(email, password, rememberMe)
    }
    return (
        <div className={classes.login}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login