import React, { useState, createRef } from 'react'
import classes from './loginForm.module.css'
import { reduxForm, Field } from 'redux-form'
import loginLogo from '../../../images/others/loginForm_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const LoginForm = ({ handleSubmit, error }) => {
    const [isPasswordHidden, setIsPasswordHiddenStatus] = useState(true)
    const hidePassword = () => setIsPasswordHiddenStatus(true)
    const showPassword = () => setIsPasswordHiddenStatus(false)
    const commmonPlaceholderStyle = {
        transitionProperty: 'top',
        transitionDuration: '.2s',
        transitionTimingFunction: 'linear',
        top: -35 + 'px'
    }
    const noPlaceholderStyles = {
        transitionProperty: 'top',
        transitionDuration: '.2s',
        transitionTimingFunction: 'linear',
        top: 0 + 'px'
    }
    const [emailPlaceholderStyle, setEmailPlaceholderStyle] = useState(noPlaceholderStyles)
    const [passwordPlaceholderStyle, setPasswordPlaceholderStyle] = useState(noPlaceholderStyles)
    const emailPlaceholder = createRef()
    const passwordPlaceholder = createRef()
    const onEmailFocus = () => setEmailPlaceholderStyle(commmonPlaceholderStyle)
    const onPasswordFocus = () => setPasswordPlaceholderStyle(commmonPlaceholderStyle)
    const onEmailBlur = (e) => {
        if(e.currentTarget.value === '') setEmailPlaceholderStyle(noPlaceholderStyles)
    }
    const onPasswordBlur = (e) => {
        if(e.currentTarget.value === '') setPasswordPlaceholderStyle(noPlaceholderStyles)
    }
    return (
        <div className={classes.wrapper}>
            <form onSubmit={handleSubmit} className={classes.loginForm}>
                <div className={classes.title}>
                    <h2>Welcome</h2>
                </div>
                <div className={classes.img}>
                    <img src={loginLogo} alt="" />
                </div>
                <div className={classes.email}>
                    <Field onFocus={onEmailFocus} onBlur={onEmailBlur} type="text" component="input" name="email" className={classes.inputs} />
                    <span style={emailPlaceholderStyle} ref={emailPlaceholder} className={classes.animation_line} data-placeholder="Email"></span>
                </div>
                <div className={classes.password}>
                    <span className={classes.btn_show_password}>
                        {isPasswordHidden ? <FontAwesomeIcon onClick={showPassword} className={classes.openEye} icon={faEye} /> :
                            <FontAwesomeIcon onClick={hidePassword} className={classes.closedEye} icon={faEyeSlash} />}
                    </span>
                    <Field onFocus={onPasswordFocus} onBlur={onPasswordBlur} type={isPasswordHidden ? "password" : "text"} component="input" name="password" className={classes.inputs} />
                    <span style={passwordPlaceholderStyle} ref={passwordPlaceholder} className={classes.animation_line} data-placeholder="Password"></span>
                </div>
                <div className={classes.rememberMe}>
                    <Field type="checkbox" component="input" name="rememberMe" />
                    <p>Remember Me</p>
                </div>
                {error && <div className={classes.error}>
                    <span>{error}</span>
                </div>}
                <div className={classes.btn_login}>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm