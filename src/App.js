import React from 'react'
import Todo from './components/todo/todo'
import { connect } from 'react-redux'
import LoginContainer from './components/Login/loginContainer'
import SidebarContainer from './components/Sidebar/sidebarContainer'
import HeaderContainer from './components/Header/headerContainer'
import classes from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import AboutUsContainer from './components/AboutUs/aboutUsContainer'

class App extends React.Component {
  state = {
    styleBackground: ''
  }
  setStateValue = () => {
    this.props.backgrounds.forEach(background => {
      if (background.chosen) this.setState({ styleBackground: background.styleBackground })
    })
  }
  componentDidMount() {
    this.setStateValue()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.backgrounds !== this.props.backgrounds) this.setStateValue()
  }
  render() {
    return (
      <div className="App" style={{ background: this.state.styleBackground }}>
        <div className={classes.todoWrapper}>
          <Switch>
            <Route path="/aboutUS" render={() => (<><HeaderContainer /><div className={classes.container}><SidebarContainer /><AboutUsContainer /></div></>)} />
            <Route path="/login" render={() => (<LoginContainer />)} />
            <Route exact path="/" render={() => (this.props.isAuth ?
              <><HeaderContainer /><div className={classes.container}><SidebarContainer /><Todo /></div></> :
              <LoginContainer />)} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  backgrounds: state.todolist.backgrounds
})

const AppContainer = connect(mapStateToProps, {  })(App)

export default AppContainer
