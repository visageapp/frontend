export const LOGIN = 'LOGIN';

export function login (name) {
  return {
    type: LOGIN,
    name
  }
}
