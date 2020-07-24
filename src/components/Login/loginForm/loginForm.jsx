import React from 'react'
import classes from './loginForm.module.css'
import { reduxForm, Field } from 'redux-form'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.loginForm}>
            <div className={classes.email}>
                <h4>Email</h4>
                <Field type="text" placeholder="Enter your email" component="input" name="email"/>
            </div>
            <div className={classes.password}>
                <h4>Password</h4>
                <Field type="password" placeholder="Enter your password" component="input" name="password"/>
            </div>
            <div className={classes.rememberMe}>
                <Field type="checkbox" component="input" name="rememberMe"/>
                <p>remember me</p>
            </div>
            {error && <div className={classes.error}>
                <span>{error}</span>
            </div>}
            <div className={classes.btn_login}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm