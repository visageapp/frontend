import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendPlaid, linkPlaid } from './../../actions/landing.js';
import BankButton from './BankButton.js';


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
        <li style={{listStyle: 'none', backgroundColor: '#f3f3f3', margin: '5px', borderRadius: '3px', display: 'flex', alignItems:'center', justifyContent: 'center', padding: '10px', display: 'inline-block' }} onClick={(e) => this.handleBank(curr)} key={key}>
          <BankButton style={{height: '50px', width: '100px',alignItems:'center', justifyContent: 'center', color: '#29AAE2' }} bank={bank} />
        </li>
      )
    })

    return (
      <div>
        <p>BankType</p>
        <ul style={{width: '260px', margin: 0, padding: 0, alignItems:'center', justifyContent: 'center'}}>
          {bankList}
        </ul>
        <div>
          <input value={this.state.username} onChange={this.handleUsername.bind(this)} placeholder="username" />
          <input value={this.state.password} onChange={this.handlePassword.bind(this)} placeholder="password" />
          <button onClick={this.submitPlaid.bind(this)}>Submit</button>
        </div>
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
