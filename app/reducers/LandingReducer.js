import I from 'immutable';
import { handleLogin } from './../core/landing.js';
import { LOGIN } from './../actions/landing.js';

const init = I.Map({
  name: '',
  fbAuth: false
})

export function landingReducer (state = init, action) {
  switch (action.type) {

    case LOGIN:
      return handleLogin(state, action.name);

    default:
      return state;

  }
}
