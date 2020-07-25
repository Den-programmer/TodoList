import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './BLL/redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Provider store={store}><App store={store}/></Provider></BrowserRouter>, document.getElementById('root'))