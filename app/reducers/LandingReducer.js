import I from 'immutable';
import { handleLogin, handleLinkPlaid } from './../core/landing.js';
import { LOGIN, LINK_PLAID } from './../actions/landing.js';

const init = I.Map({
  name: '',
  fbAuth: false
})

export function landingReducer (state = init, action) {
  switch (action.type) {

    case LOGIN:
      return handleLogin(state, action.name);

    case LINK_PLAID:
      return handleLinkPlaid(state, action.plaid);

    default:
      return state;

  }
}
