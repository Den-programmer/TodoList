import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './BLL/redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase/app' 
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDioGV7RWVAH2K-QMx26QVIcRfbwSWGAVQ",
    authDomain: "todolist-backend-2d7cd.firebaseapp.com",
    databaseURL: "https://todolist-backend-2d7cd-default-rtdb.firebaseio.com",
    projectId: "todolist-backend-2d7cd",
    storageBucket: "todolist-backend-2d7cd.appspot.com",
    messagingSenderId: "914156014929",
    appId: "1:914156014929:web:e415c444545c09e1afd770",
    measurementId: "G-FFKNZ0N2FG"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
        <App store={store} />
    </Provider>
</BrowserRouter>, document.getElementById('root'))
