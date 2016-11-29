import I from 'immutable';

export function handleLogin (state, name) {
  return state.set('name', name).set('fbAuth', true);
}

export function handleLinkPlaid (state, plaid) {
  return state.set('plaid', I.fromJS(plaid));
}
