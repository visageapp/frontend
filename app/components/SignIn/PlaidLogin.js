import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendPlaid, linkPlaid } from './../../actions/landing.js';
import BankButton from './BankButton.js';
import SuperInput from './../Input/index.js';
import {Motion, StaggeredMotion, spring} from 'react-motion';

var style = require('./pladlog.css');

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
  this.props.history.push('/visa');
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
      return (
        <li style={{listStyle: 'none', backgroundColor: '#f3f3f3', margin: '5px', borderRadius: '3px', display: 'flex', alignItems:'center', justifyContent: 'center', padding: '10px', display: 'inline-block' }} onClick={(e) => this.handleBank(bank)} key={key}>
          <BankButton className={style.btn} style={{height: '50px', width: '100px',alignItems:'center', justifyContent: 'center', color: '#29AAE2' }} bank={bank} />
        </li>
      )
    });

    return (
      <Motion defaultStyle={{x: 0}} style={{x: spring(1)}}>
        {i => {
            return (
      <div style={{display: 'flex', opacity: i.x, flexDirection: 'row', width: '100vw', minHeight: '100vh', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{display: 'block', maxWidth: 400, padding: 16}}>
            <h2>Step 1: Pick out your  bank account and log in</h2><p>Don't worry, your account credentials are secure with us. </p>
            <SuperInput style={{width: '260px', fontSize: '1.25em'}} callback={this.handleUsername.bind(this)} type="text" value={this.state.username} placeholder="Enter Username"/>
            <SuperInput style={{width: '260px', fontSize: '1.25em'}} callback={this.handlePassword.bind(this)} type="password" value={this.state.password} placeholder="Enter Password"/>
            <button style={{backgroundColor: 'transparent', color: '#fff', boxShadow: 'none', border: 'none', border: '1px solid #fff', marginTop: '10px', width: '260px', height: '34px'}}onClick={this.submitPlaid.bind(this)}>Submit</button>
          </div>

        <ul style={{width: '260px', margin: 0, padding: 0, alignItems:'center', justifyContent: 'center', flexDirection: 'column'}}>
          {bankList}
        </ul>
      </div>
      )}
      }
      </Motion>);
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
