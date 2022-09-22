import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Admin } from './admin';

ReactDOM.render(
  /* <Provider store={store}>
    
  </Provider>, */
  <Router>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
