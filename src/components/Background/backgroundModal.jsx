import React from 'react'
import classes from './backgroundModal.module.css'
import { Portal } from '../common/Portal/portal'
import BackgroundItem from './BackgroundItem/backgroundItem'

const BackgroundModal = (props) => {
    const backgrounds = props.backgrounds.map(background => {
        return <BackgroundItem key={background.id} id={background.id} src={background.src} chosen={background.chosen} setBackground={props.updateBackground}/>
    })
    const confirmBackground = () => props.setIsBackgroundModalActiveStatus(false) 
    return (
        <Portal>
            <div className={classes.modalContainer}>
                <div className={classes.modal}>
                    <div className={classes.modalHeader}>
                        <h3>Choose background</h3>
                    </div>
                    <div className={classes.modalBody}>
                        {backgrounds}
                    </div>
                    <div className={classes.modalFooter}>
                        <div className={classes.confirm}>
                            <button onClick={confirmBackground}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default BackgroundModal