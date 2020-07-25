import React from 'react'
import Todo from './components/todo/todo'
import { connect } from 'react-redux'
import LoginContainer from './components/Login/loginContainer'
import SidebarContainer from './components/Sidebar/sidebarContainer'
import HeaderContainer from './components/Header/headerContainer'
import classes from './App.module.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.isAuth ? <><HeaderContainer /><div className={classes.container}><SidebarContainer /><Todo/></div></> : <LoginContainer />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

const AppContainer = connect(mapStateToProps, {})(App)

export default AppContainer
