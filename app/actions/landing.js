export const LOGIN = 'LOGIN_REQUEST';

export function login (name) {
  return {
    type: LOGIN,
    name
  }
}


export function sendCred (cred) {
  return dispatch => {
    dispatch(loginRequest(cred))

    return fetch(process.env.API_URL)
      .then(response => response.json())
      .then(res => {
        if(!res.user){
          dispatch(loginError(res.message))
        } else {
          dispatch(loginSuccess(
            {
              name: res.name,
              cNum: res.cNum,
              exp: res.exp,
              cvc: res.cvc
            }
          )
        );
        }
        console.log(res);
      }
      ).catch(err => console.log('Error: ', err))
  }
}
