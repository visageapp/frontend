import I from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer.js';
import DevTools from './../components/Devtools/Devtools.js';

var finalCreateStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  var store = finalCreateStore(rootReducer, initialState);
  return store;
}
