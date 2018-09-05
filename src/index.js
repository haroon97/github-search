import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/configureStore';
import { Provider } from 'react-redux';

const jsx = 
  <Provider store={store}>
    <App />
  </Provider>

ReactDOM.render(jsx, document.getElementById('root'));
