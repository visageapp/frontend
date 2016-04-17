import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendPlaid, linkPlaid } from './../../actions/landing.js';

export default class PlaidLogin extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.handleBank = this.handleBank.bind(this);
    this.state = {
      username: '',
      password: '',
      bank: ''
    }

  }
  render() {
    var lc = this.props.bank.replace(/\s+/g, '').toLowerCase();
    return (<div style={{width: 128}}><img src={`../assets/banks/${lc}.svg`} alt={this.props.bank}/></div>);
  }
}

export default class PlaidLogin extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.handleBank = this.handleBank.bind(this);
    this.state = {
      username: '',
      password: '',
      bank: ''
    }
  }

submitPlaid () {
  var plaid = {
    username: this.state.username,
    password: this.state.password,
    bank: this.state.bank
  }
  this.props.linkPlaid(plaid);
  this.props.sendPlaid(plaid);
  console.log(this.state.username);
  console.log(this.state.password);
  console.log(this.state.bank);
}

handleUsername (event) {
  this.setState({username: event.target.value});
  console.log('username');
}

handlePassword (event) {
  this.setState({password: event.target.value});
  console.log('password');
}

handleBank (bank) {
  this.setState({bank});
  console.log(this.state.bank);
}

  render() {

    var bankOptions = [
      'Chase',
      'Bank of America',
      'Wells Fargo',
      'Citi',
      'US Bank',
      'USAA',
      'Fidelity',
      'PNC',
      'Capital One',
      'TD Bank',
      'SunTrust',
      'Navy Federal',
      'Charles Schwab'
    ];

    var bankList  = bankOptions.map((bank, key) => {
      var curr = bank;
      return (
        <li key={key}>
          <BankButton onClick={(e) => this.handleBank(curr)} bank={bank} />
        </li>
      )
    })

    return (
      <div>
        <p>BankType</p>
        <ul>
          {bankList}
        </ul>
        <input value={this.state.username} onChange={this.handleUsername.bind(this)} placeholder="username" />
        <input value={this.state.password} onChange={this.handlePassword.bind(this)} placeholder="password" />
        <button onClick={this.submitPlaid.bind(this)}>Submit</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    landing: state.landing
  }
}

function mapDispatchToProps(dispatch) {
  return {
    linkPlaid: bindActionCreators(linkPlaid, dispatch),
    sendPlaid: bindActionCreators(sendPlaid, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaidLogin);
