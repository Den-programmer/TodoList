import classes from 'preloader.module.css'
import React from 'react'
import preloader from '../../../images/Preloader/prealoder2.svg'

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader
