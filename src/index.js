import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './BLL/state'

ReactDOM.render(<App store={store}/>, document.getElementById('root'));