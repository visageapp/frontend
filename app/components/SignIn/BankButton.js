import React from 'react';
export default class BankButton extends React.Component {

  render() {
    var lc = this.props.bank.replace(/\s+/g, '').toLowerCase();
    return (<div style={{width: 128}}><img src={`../assets/banks/${lc}.svg`} alt={this.props.bank}/></div>);
  }
}
