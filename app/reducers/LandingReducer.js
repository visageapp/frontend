import I from 'immutable';
import { handleLogin } from './../core/landing.js';
import { LOGIN } from './../actions/landing.js';

export function landingReducer (state = I.Map({}), action) {
  switch (action.type) {

    case LOGIN:
      return handleLogin(state, action.name);

    default:
      return state;

  }
}
