import React from 'react'
import Todo from './components/todo/todo'
import { connect } from 'react-redux'
import LoginContainer from './components/Login/loginContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.isAuth ? <Todo/> : <LoginContainer />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

const AppContainer = connect(mapStateToProps, {})(App)

export default AppContainer
