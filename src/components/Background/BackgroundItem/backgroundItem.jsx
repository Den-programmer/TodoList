import React from 'react'
import classes from './backgroundItem.module.css'

const BackgroundItem = ({ src, chosen, setBackground, id }) => {
    return (
        <div className={chosen ? classes.active : classes.gradient}>
            <img onClick={() => setBackground(id)} src={src} alt="" />
        </div>
    )
}

export default BackgroundItem