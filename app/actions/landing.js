export const LOGIN = 'LOGIN_REQUEST';
export const LINK_PLAID = 'LINK_PLAID';

export function login (name) {
  return {
    type: LOGIN,
    name
  }
}

export function linkPlaid (plaid) {
  return {
    type: LINK_PLAID,
    plaid
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

export function sendPlaid (cred) {
  console.log('from http', {
    username: cred.username,
    password: cred.password,
    bank: cred.bank
  });
  return dispatch => {
    return fetch('http://10.24.194.64:8000/connect',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: cred.username,
        password: cred.password,
        bank: cred.bank
      })
    });
  }
}
