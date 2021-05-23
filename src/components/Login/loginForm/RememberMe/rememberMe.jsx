import React from 'react'

const RememberMe = () => {
    return (
        <div className={classes.rememberMe}>
            <Field type="checkbox" component="input" name="rememberMe" />
            <p>Remember Me</p>
        </div>
    )
}

export default RememberMe