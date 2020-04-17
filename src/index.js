import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './BLL/redux'

ReactDOM.render(<App store={store}/>, document.getElementById('root'));