import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { landingReducer } from './LandingReducer.js';

export default combineReducers({
  landing: landingReducer
});
