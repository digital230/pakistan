import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {allReducers} from './reducers/rootReducer';
import './stylesheets/index.css';


const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
