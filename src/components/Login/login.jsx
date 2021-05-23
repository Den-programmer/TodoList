import React from 'react'
import classes from './login.module.css'
import LoginReduxForm from './loginForm/loginForm'

const Login = ({ login, rememberMe, isRegister, createAccount, setIsRegisterStatus }) => {
    const onSubmit = (FormData) => {
        const { email, password } = FormData
        isRegister ? createAccount(email, password) : login(email, password)
    }
    return (
        <div className={classes.login}>
            <LoginReduxForm onSubmit={onSubmit} isRegister={isRegister} setIsRegisterStatus={setIsRegisterStatus}/>
        </div>
    )
}

export default Login