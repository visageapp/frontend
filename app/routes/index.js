import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './../store/store.js';
import App from './../components/App.js';
import Landing from './../components/Landing/index.js';
import CreditCard from './../components/SignIn/CreditCard.js';
import PlaidLogin from './../components/SignIn/PlaidLogin.js';
const store = configureStore();

render (
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing}/>
          <Route path="/bank" component={PlaidLogin}/>
          <Route path="/visa" component={CreditCard} />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('app')
);
