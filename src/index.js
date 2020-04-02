import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);