import React from 'react';
export default class BankButton extends React.Component {

  render() {
    var lc = this.props.bank.replace(/\s+/g, '').toLowerCase();
    return (<div className={this.props.className} style={Object.assign({height:'30px', width: 'auto', color: '#29AAE2', display: 'flex'}, this.props.style)}><img style={{height:'90%', width: 'auto'}} src={`../assets/banks/${lc}.svg`} alt={this.props.bank}/></div>);
  }
}
