import I from 'immutable';

export function handleLogin (state, name) {
  return state.set('name', name).set('fbAuth', true);
}
