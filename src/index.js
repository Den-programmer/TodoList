import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './BLL/redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase/app' 
import 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
        <App store={store} />
    </Provider>
</BrowserRouter>, document.getElementById('root'))
