import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './BLL/redux'
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><App store={store}/></Provider>, document.getElementById('root'));