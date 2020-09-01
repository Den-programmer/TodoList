import React from 'react'
import classes from './aboutUs.module.css'
import { Redirect, NavLink } from 'react-router-dom'
import LoginContainer from '../Login/loginContainer'
import todolistApp from '../../images/AboutUS/AppImage/myTodolist.png'
import menuImage from '../../images/AboutUS/menu.jpg'
import backgroundsImage from '../../images/AboutUS/backgrounds.jpg'
import editTasksImage from '../../images/AboutUS/editTodoTasks.png'
import checkMark from '../../images/AboutUS/tick.png'

const AboutUs = ({ isAuth }) => {

    const startNow = () => {
        if (isAuth) return <Redirect to="/" />

        return <LoginContainer />
    }

    return (
        <div className={classes.website}>
            <section className={classes.header}>
                <div className={classes.title}>
                    <h1>Get everything in order with TodoList</h1>
                    <div className={classes.btn_startNow}>
                        <NavLink onClick={startNow} to="/">Start now!</NavLink>
                    </div>
                </div>
                <div className={classes.uploadUrMind}>
                    <h2>Upload your mind</h2>
                    <p>
                        Find Clarity and calm - Move Your Tasks from your head
                        to your To-Do List
                    </p>
                </div>
                <div className={classes.imgApp}>
                    <img src={todolistApp} alt="" />
                </div>
            </section>
            <section className={classes.features}>
                <div className={classes.features__title}>
                    <h2>Features</h2>
                </div>
                <div className={classes.features__mainContent}>
                    <div className={classes.menuImg}>
                        <img src={menuImage} alt="" />
                    </div>
                    <div className={classes.features__mainContent_text}>
                        <p>
                            Our application has a convenient menu, in which, in addition to standard functions,
                            there is a sorting of tasks: completed, active, everything.
                            Also, for the convenience of the eyes at different times of work, as well as the comfort of the user,
                             the function of changing the background is provided.
                        </p>
                    </div>
                </div>
                <div className={classes.backgroundsTitle}>
                    <p>Choosing background:</p>
                </div>
                <div className={classes.backgroundsImg}>
                    <img src={backgroundsImage} alt="" />
                </div>
            </section>
            <section className={classes.additionalFeatures}>
                <div className={classes.editTask}>
                    <div className={classes.editTask__title}>
                        <p>
                            The application provides the function of editing tasks after adding them.
                            You should click on the task that you want to edit and then you will go to edit mode
                        </p>
                    </div>
                    <div className={classes.editTasksImg}>
                        <img src={editTasksImage} alt="" />
                    </div>
                </div>
            </section>
            <section id="contact" className={classes.contact}>
                <h2>Contact Us</h2>
                <p className={classes.contact__text}>
                    If you want to help developers find errors in the application or give advice,
                    you can contact us at these contacts!
                </p>
                <p title="Ukraine" className={classes.contact__phoneNumber}>
                    +380990337487
                </p>
            </section>
            <section className={classes.footer}>
                <div className={classes.footer__mainContent}>
                    <p>Chaos has no place in life.</p>
                    <h2>Keep everything under control with Todoist.</h2>
                    <div className={classes.btn_startNow}>
                        <NavLink onClick={startNow} to="/">Start now!</NavLink>
                    </div>
                </div>
                <div className={classes.checkMark}>
                    <img src={checkMark} alt="" />
                </div>
            </section>
        </div>
    )
}

export default AboutUs