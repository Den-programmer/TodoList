import React from 'react'
import Todo from './components/todo/todo'
import { connect } from 'react-redux'
import LoginContainer from './components/Login/loginContainer'
import SidebarContainer from './components/Sidebar/sidebarContainer'
import HeaderContainer from './components/Header/headerContainer'
import classes from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import AboutUsContainer from './components/AboutUs/aboutUsContainer'
import { requestBackgrounds } from './BLL/reducers/reducerTodo'

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
    this.props.requestBackgrounds()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.backgrounds !== this.props.backgrounds) this.setStateValue()
  }
  todoCheckout = this.props.isMenuActive ? classes.activeContainer : classes.container   
  menuCheckout = this.props.isMenuActive ? classes.activeMenu : classes.menuContainer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  render() {
    return (
      <div className="App" style={{ background: this.state.styleBackground }}>
        <div className={classes.todoWrapper}>
          <Switch>
            <Route path="/aboutUS" render={() => (<div className={classes.dFlexContainer}><div className={this.menuCheckout}><SidebarContainer /></div><div className={this.todoCheckout}><HeaderContainer /><AboutUsContainer /></div></div>)} />
            <Route path="/login" render={() => (<LoginContainer />)} />
            <Route exact path="/" render={() => (this.props.isAuth ?
              <div className={classes.dFlexContainer}><div className={this.menuCheckout}><SidebarContainer /></div><div className={this.todoCheckout}><HeaderContainer /><Todo /></div></div> :
              <LoginContainer />)} />
            {/* Any path! */}
            <Route path="*" render={() => (<div style={{ textAlign: 'center' }}>Error was occupied in a run time by occupation.</div>)} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  backgrounds: state.todolist.backgrounds,
  isMenuActive: state.sidebar.isMenuActive
})

const AppContainer = connect(mapStateToProps, { requestBackgrounds })(App)

export default AppContainer
