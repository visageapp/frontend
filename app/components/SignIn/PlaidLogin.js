import React from 'react';

export default class PlaidLogin extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <p>BankType</p>
        <ul>
          <li>
            <button>Chase</button>
          </li>
          <li>
            <button>Bank of America</button>
          </li>
          <li>
            <button>Wells Fargo</button>
          </li>
          <li>
            <button>Citi</button>
          </li>
          <li>
            <button>US Bank</button>
          </li>
          <li>
            <button>USAA</button>
          </li>
          <li>
            <button>Fidelity</button>
          </li>
          <li>
            <button>PNC</button>
          </li>
          <li>
            <button>Capital One</button>
          </li>
          <li>
            <button>TD Bank</button>
          </li>
          <li>
            <button>SunTrust</button>
          </li>
          <li>
            <button>Navy Federal</button>
          </li>
          <li>
            <button>Charles Schwab</button>
          </li>
        </ul>
        <input placeholder="username" />
        <input placeholder="password" />
        <button>Submit</button>
      </div>
    );
  }
}
